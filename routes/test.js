const express = require("express");
const auth = require("../middleware/authMiddleware");
const Test = require("../models/Test");
const Question = require("../models/Question");

const router = express.Router();

/*
Start Test
*/
router.post("/start", auth, async (req, res) => {
    try {

        const questions = await Question.aggregate([
            {
                $sample: {
                    size: 10
                }
            }
        ]);

        const test = new Test({
            user: req.user.id,
            questions: questions.map(q => q._id),
            totalQuestions: questions.length
        });

        await test.save();

        res.status(201).json({
            message: "Mock Test Started",
            testId: test._id,
            questions
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
});

/*
Submit Test
*/
router.post("/submit/:testId", auth, async (req, res) => {

    try {

        const test = await Test.findById(req.params.testId);

        if (!test) {
            return res.status(404).json({
                message: "Test not found"
            });
        }

        let score = 0;

        for (const answer of req.body.answers) {

            const question = await Question.findById(answer.questionId);

            if (
                question &&
                question.correctAnswer === answer.selectedAnswer
            ) {
                score++;
            }

        }

        test.answers = req.body.answers;
        test.score = score;
        test.submitted = true;
        test.submittedAt = new Date();

        await test.save();

        res.json({
            message: "Test submitted successfully",
            score,
            totalQuestions: test.totalQuestions
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

/*
Get Test History
*/
router.get("/history", auth, async (req, res) => {

    try {

        const tests = await Test.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.json(tests);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

/*
Performance Summary
*/
router.get("/performance", auth, async (req, res) => {

    try {

        const tests = await Test.find({
            user: req.user.id,
            submitted: true
        });

        if (tests.length === 0) {

            return res.json({
                totalTests: 0,
                averageScore: 0,
                highestScore: 0,
                latestScore: 0
            });

        }

        let totalScore = 0;
        let highestScore = 0;

        tests.forEach(test => {

            totalScore += test.score;

            if (test.score > highestScore) {
                highestScore = test.score;
            }

        });

        const averageScore = totalScore / tests.length;
        const latestScore = tests[tests.length - 1].score;

        res.json({
            totalTests: tests.length,
            averageScore: Number(averageScore.toFixed(2)),
            highestScore,
            latestScore
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

/*
Dashboard API
*/
router.get("/dashboard", auth, async (req, res) => {

    try {

        const tests = await Test.find({
            user: req.user.id,
            submitted: true
        }).sort({ createdAt: -1 });

        let totalTests = tests.length;
        let totalScore = 0;
        let highestScore = 0;

        tests.forEach(test => {

            totalScore += test.score;

            if (test.score > highestScore) {
                highestScore = test.score;
            }

        });

        const averageScore =
            totalTests > 0 ? totalScore / totalTests : 0;

        res.json({

            totalTests,

            averageScore: Number(averageScore.toFixed(2)),

            highestScore,

            recentTests: tests.slice(0, 5)

        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

/*
Get Test Details
*/
router.get("/:testId", auth, async (req, res) => {

    try {

        const test = await Test.findById(req.params.testId)
            .populate("questions")
            .populate("answers.questionId");

        if (!test) {

            return res.status(404).json({
                message: "Test not found"
            });

        }

        if (test.user.toString() !== req.user.id) {

            return res.status(403).json({
                message: "Access denied"
            });

        }

        res.json(test);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

module.exports = router;