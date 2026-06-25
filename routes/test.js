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

module.exports = router;