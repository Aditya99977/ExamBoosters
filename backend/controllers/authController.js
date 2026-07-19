const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");
const User = require("../models/User");

/*
=================================================
User Registration
=================================================
*/

exports.signup = async (req, res) => {

    try {

        const { name, email, password, examTarget } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({

                success: false,

                message: "Please fill all required fields."

            });

        }

        const existingUser = await User.findOne({

            email: email.toLowerCase(),

        });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                message: "User already exists."

            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({

            name,

            email: email.toLowerCase(),

            password: hashedPassword,

            examTarget,

            // Email verification disabled for Beta
            isVerified: true,

        });

        const token = generateToken(user._id);

        return res.status(201).json({

            success: true,

            message: "User registered successfully.",

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

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

};

/*
=================================================
User Login
=================================================
*/

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message: "Email and password are required."

            });

        }

        const user = await User.findOne({

            email: email.toLowerCase(),

        });

        if (!user) {

            return res.status(400).json({

                success: false,

                message: "User not found."

            });

        }

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if (!isMatch) {

            return res.status(400).json({

                success: false,

                message: "Invalid password."

            });

        }

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

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

};