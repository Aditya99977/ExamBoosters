const mongoose = require("mongoose");

const subjectProgressSchema = new mongoose.Schema(
    {
        subject: {
            type: String,
            required: true,
            trim: true,
        },

        accuracy: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        questionsSolved: {
            type: Number,
            default: 0,
            min: 0,
        },

        correctAnswers: {
            type: Number,
            default: 0,
            min: 0,
        },

        wrongAnswers: {
            type: Number,
            default: 0,
            min: 0,
        },

        averageTime: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        _id: false,
    }
);

const userExamProgressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        exam: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Exam",
            required: true,
            index: true,
        },

        overallAccuracy: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        totalQuestionsSolved: {
            type: Number,
            default: 0,
            min: 0,
        },

        totalCorrectAnswers: {
            type: Number,
            default: 0,
            min: 0,
        },

        totalWrongAnswers: {
            type: Number,
            default: 0,
            min: 0,
        },

        mockTestsAttempted: {
            type: Number,
            default: 0,
            min: 0,
        },

        averageMockScore: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },

        studyStreak: {
            type: Number,
            default: 0,
            min: 0,
        },

        highestStudyStreak: {
            type: Number,
            default: 0,
            min: 0,
        },

        subjectProgress: {
            type: [subjectProgressSchema],
            default: [],
        },

        lastStudiedAt: {
            type: Date,
            default: null,
        },

        isArchived: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// One progress document per user per exam
userExamProgressSchema.index(
    {
        user: 1,
        exam: 1,
    },
    {
        unique: true,
    }
);

module.exports = mongoose.model(
    "UserExamProgress",
    userExamProgressSchema
);