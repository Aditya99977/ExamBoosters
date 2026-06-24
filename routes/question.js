const express = require("express");
const Question = require("../models/Question");

const router = express.Router();

// Add Question
router.post("/add", async (req, res) => {
    try {
        const question = new Question(req.body);

        await question.save();

        res.status(201).json({
            message: "Question added successfully",
            question
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Get All Questions
router.get("/", async (req, res) => {
    try {
        const filter = {};

        if (req.query.subject) {
            filter.subject = req.query.subject;
        }

        if (req.query.difficulty) {
            filter.difficulty = req.query.difficulty;
        }

        const questions = await Question.find(filter);

        res.json(questions);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Get Random Questions
router.get("/random", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;

        const questions = await Question.aggregate([
            { $sample: { size: limit } }
        ]);

        res.json(questions);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;