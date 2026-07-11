const mongoose = require("mongoose");

const ChatHistorySchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

    },

    exam: {

        type: String,

        required: true,

        trim: true

    },

    subject: {

        type: String,

        required: true,

        trim: true

    },

    question: {

        type: String,

        required: true,

        trim: true

    },

    response: {

        type: String,

        required: true

    },

    model: {

        type: String,

        default: process.env.GEMINI_MODEL || "gemini-3.5-flash"

    },

    createdAt: {

        type: Date,

        default: Date.now

    }

});

module.exports = mongoose.model("ChatHistory", ChatHistorySchema);