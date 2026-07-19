const mongoose = require("mongoose");

const aiPreferenceSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            default: "",
            trim: true,
        },

        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            default: "Medium",
        },

        mode: {
            type: String,
            enum: ["Explain", "Solve", "Quiz", "Hint", "Interview"],
            default: "Explain",
        },
    },
    {
        _id: false,
    }
);

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ["student", "admin"],
            default: "student",
        },

        examTarget: {
            type: String,
            default: "",
            trim: true,
        },

        aiPreferences: aiPreferenceSchema,

        profileImage: {
            type: String,
            default: "",
        },

        // ==========================
        // Email Verification
        // ==========================
        isVerified: {
            type: Boolean,
            default: false,
        },

        verificationToken: {
            type: String,
            default: null,
        },

        verificationTokenExpires: {
            type: Date,
            default: null,
        },

        studyStats: {
            questionsSolved: {
                type: Number,
                default: 0,
            },

            aiChats: {
                type: Number,
                default: 0,
            },

            accuracy: {
                type: Number,
                default: 0,
                min: 0,
                max: 100,
            },
        },

        // ==========================
        // Study Streak
        // ==========================
        studyStreak: {
            type: Number,
            default: 0,
            min: 0,
        },

        longestStudyStreak: {
            type: Number,
            default: 0,
            min: 0,
        },

        lastStudyDate: {
            type: Date,
            default: null,
        },

        lastActive: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);