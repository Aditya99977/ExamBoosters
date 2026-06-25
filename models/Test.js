const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
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
                ref: "Question"
            },

            selectedAnswer: {
                type: String
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