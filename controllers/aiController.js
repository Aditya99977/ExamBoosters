const ChatHistory = require("../models/ChatHistory");

const buildPrompt = require("../utils/promptBuilder");

const generateResponse = require("../utils/gemini");


// ===========================
// Chat With AI
// ===========================

exports.chatWithAI = async (req, res) => {

    try {

        const { exam, subject, message } = req.body;

        if (!exam || !subject || !message) {

            return res.status(400).json({

                message: "Exam, Subject and Message are required."

            });

        }

        const prompt = buildPrompt({

            exam,

            subject,

            message

        });

        const aiResponse = await generateResponse(prompt);

        const chat = await ChatHistory.create({

            user: req.user.id,

            exam,

            subject,

            question: message,

            response: aiResponse

        });

        res.status(200).json({

            message: "AI Response Generated Successfully.",

            response: aiResponse,

            chatId: chat._id

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: error.message

        });

    }

};


// ===========================
// Get Chat History
// ===========================

exports.getChatHistory = async (req, res) => {

    try {

        const chats = await ChatHistory.find({

            user: req.user.id

        }).sort({

            createdAt: -1

        });

        res.status(200).json(chats);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};