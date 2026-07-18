const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
{
    question: {
        type: String,
        required: true
    },

    options: {
        type: [String],
        required: true
    },

    correctAnswer: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        default: "Easy"
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Question", QuestionSchema);