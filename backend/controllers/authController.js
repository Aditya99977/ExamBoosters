const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");
const User = require("../models/User");

// =============================================
// Validation Helpers
// =============================================

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isStrongPassword = (password) => {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[@$!%*?&]/.test(password)
    );
};

// =============================================
// Shared Authentication Function
// =============================================

const authenticateUser = async (
    email,
    password,
    adminOnly = false
) => {

    email = email?.trim().toLowerCase();

    if (!email || !password) {
        return {
            status: 400,
            body: {
                success: false,
                message: "Email and password are required.",
            },
        };
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return {
            status: 401,
            body: {
                success: false,
                message: "Invalid email or password.",
            },
        };
    }

    if (!user.password) {
        return {
            status: 500,
            body: {
                success: false,
                message: "Account data is invalid.",
            },
        };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return {
            status: 401,
            body: {
                success: false,
                message: "Invalid email or password.",
            },
        };
    }

    if (user.status && user.status !== "active") {
        return {
            status: 403,
            body: {
                success: false,
                message: "Your account has been suspended.",
            },
        };
    }

    if (adminOnly && user.role !== "admin") {
        return {
            status: 403,
            body: {
                success: false,
                message: "Administrator access only.",
            },
        };
    }

    user.lastActive = new Date();

    await user.save();

    const token = generateToken(user._id);

    return {
        status: 200,
        body: {
            success: true,
            message: "Login successful.",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                examTarget: user.examTarget,
                profileImage: user.profileImage,
            },
        },
    };
};

// =============================================
// User Registration
// =============================================

exports.signup = async (req, res) => {

    try {

        let {

            name,

            email,

            password,

            examTarget

        } = req.body;

        name = name?.trim();

        email = email?.trim().toLowerCase();

        if (!name || !email || !password) {

            return res.status(400).json({

                success: false,

                message: "Please fill all required fields.",

            });

        }

        if (name.length < 3 || name.length > 50) {

            return res.status(400).json({

                success: false,

                message: "Name must be between 3 and 50 characters.",

            });

        }

        if (!emailRegex.test(email)) {

            return res.status(400).json({

                success: false,

                message: "Please enter a valid email address.",

            });

        }

        if (!isStrongPassword(password)) {

            return res.status(400).json({

                success: false,

                message:
                    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.",

            });

        }

        const existingUser = await User.findOne({

            email

        });

        if (existingUser) {

            return res.status(409).json({

                success: false,

                message: "An account with this email already exists.",

            });

        }

        const hashedPassword = await bcrypt.hash(

            password,

            10

        );

        const user = await User.create({

            name,

            email,

            password: hashedPassword,

            examTarget,

            isVerified: true,

        });

        const token = generateToken(

            user._id

        );

        return res.status(201).json({

            success: true,

            message: "Registration successful.",

            token,

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

                role: user.role,

                examTarget: user.examTarget,

                profileImage: user.profileImage,

            },

        });

    }

    catch (error) {

        console.error(

            "Signup Error:",

            error

        );

        return res.status(500).json({

            success: false,

            message: "Internal server error.",

        });

    }

};// =============================================
// Student Login
// =============================================

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const result = await authenticateUser(

            email,

            password,

            false

        );

        return res

            .status(result.status)

            .json(result.body);

    }

    catch (error) {

        console.error(

            "Login Error:",

            error

        );

        return res.status(500).json({

            success: false,

            message: "Internal server error.",

        });

    }

};

// =============================================
// Admin Login
// =============================================

exports.adminLogin = async (req, res) => {

    try {

        const {

            email,

            password

        } = req.body;

        const result = await authenticateUser(

            email,

            password,

            true

        );

        return res

            .status(result.status)

            .json(result.body);

    }

    catch (error) {

        console.error(

            "Admin Login Error:",

            error

        );

        return res.status(500).json({

            success: false,

            message: "Internal server error.",

        });

    }

};