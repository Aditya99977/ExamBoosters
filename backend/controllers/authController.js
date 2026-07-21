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
// User Registration
// =============================================

exports.signup = async (req, res) => {
    try {
        let { name, email, password, examTarget } = req.body;

        // Trim Inputs
        name = name?.trim();
        email = email?.trim().toLowerCase();

        // Required Fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        // Name Validation
        if (name.length < 3 || name.length > 50) {
            return res.status(400).json({
                success: false,
                message: "Name must be between 3 and 50 characters.",
            });
        }

        // Email Validation
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address.",
            });
        }

        // Password Validation
        if (!isStrongPassword(password)) {
            return res.status(400).json({
                success: false,
                message:
                    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.",
            });
        }

        // Existing User
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists.",
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            examTarget,
            isVerified: true, // Email verification disabled for beta
        });

        // Generate JWT
        const token = generateToken(user._id);

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
    } catch (error) {
        console.error("Signup Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};

// =============================================
// User Login
// =============================================

exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;

        email = email?.trim().toLowerCase();

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }

        // Find User
        const user = await User.findOne({ email });

        // Generic Error (Prevents Email Enumeration)
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // Password Match
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // Update Last Active
        user.lastActive = new Date();
        await user.save();

        // Generate Token
        const token = generateToken(user._id);

        return res.status(200).json({
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
        });
    } catch (error) {
        console.error("Login Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};