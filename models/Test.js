const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    exam: {
        type: String,
        default: "Mock Test"
    },

    questions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question"
        }
    ],

    answers: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
                required: true
            },

            subject: {
                type: String,
                required: true
            },

            difficulty: {
                type: String,
                enum: ["Easy", "Medium", "Hard"],
                required: true
            },

            selectedAnswer: {
                type: String,
                required: true
            },

            correctAnswer: {
                type: String,
                required: true
            },

            isCorrect: {
                type: Boolean,
                default: false
            }
        }
    ],

    score: {
        type: Number,
        default: 0
    },

    totalQuestions: {
        type: Number,
        default: 0
    },

    accuracy: {
        type: Number,
        default: 0
    },

    submitted: {
        type: Boolean,
        default: false
    },

    submittedAt: {
        type: Date
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Test", TestSchema);