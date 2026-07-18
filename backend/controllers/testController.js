const Test = require("../models/Test");
const Question = require("../models/Question");


/*
=================================================
Start Mock Test
=================================================
*/

exports.startTest = async (req, res) => {

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

            exam: req.body.exam || "General Mock Test",

            questions: questions.map(question => question._id),

            totalQuestions: questions.length

        });

        await test.save();

        res.status(201).json({

            message: "Mock Test Started",

            testId: test._id,

            exam: test.exam,

            questions

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: "Internal Server Error"

        });

    }

};

/*
=================================================
Submit Mock Test
=================================================
*/

exports.submitTest = async (req, res) => {

    try {

        const test = await Test.findById(req.params.testId);

        if (!test) {

            return res.status(404).json({

                message: "Test not found"

            });

        }

        if (test.submitted) {

            return res.status(400).json({

                message: "Test already submitted"

            });

        }

        let score = 0;

        const submittedAnswers = [];

        const answers = req.body.answers || [];

        for (const answer of answers) {

            const question = await Question.findById(answer.questionId);

            if (!question) continue;

            const isCorrect =

                question.correctAnswer === answer.selectedAnswer;

            if (isCorrect) {

                score++;

            }

            submittedAnswers.push({

                questionId: question._id,

                subject: question.subject,

                difficulty: question.difficulty,

                selectedAnswer: answer.selectedAnswer,

                correctAnswer: question.correctAnswer,

                isCorrect

            });

        }

        const accuracy = test.totalQuestions > 0

            ? Number(

                (

                    (score / test.totalQuestions) * 100

                ).toFixed(2)

            )

            : 0;

        test.answers = submittedAnswers;

        test.score = score;

        test.accuracy = accuracy;

        test.submitted = true;

        test.submittedAt = new Date();

        await test.save();

        
                res.json({

            message: "Test Submitted Successfully",

            exam: test.exam,

            score,

            totalQuestions: test.totalQuestions,

            accuracy,

            submittedAt: test.submittedAt

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: "Internal Server Error"

        });

    }

};

/*
=================================================
Get Test History
=================================================
*/

exports.getHistory = async (req, res) => {

    try {

        const tests = await Test.find({

            user: req.user.id,

            submitted: true

        })

        .sort({

            submittedAt: -1

        });

        res.json(tests);

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: "Internal Server Error"

        });

    }

};

/*
=================================================
Performance Summary
=================================================
*/

exports.getPerformance = async (req, res) => {

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

                latestScore: 0,

                averageAccuracy: 0

            });

        }

        const totalTests = tests.length;

        const totalScore = tests.reduce(

            (sum, test) => sum + test.score,

            0

        );

        const totalAccuracy = tests.reduce(

            (sum, test) => sum + (test.accuracy || 0),

            0

        );

        const highestScore = Math.max(

            ...tests.map(test => test.score)

        );

        const latestTest = tests.sort(

            (a, b) =>

                new Date(b.submittedAt) -

                new Date(a.submittedAt)

        )[0];

        const latestScore = latestTest.score;

        const averageScore = Number(

            (totalScore / totalTests).toFixed(2)

        );

        const averageAccuracy = Number(

            (totalAccuracy / totalTests).toFixed(2)

        );

        res.json({

            totalTests,

            averageScore,

            highestScore,

            latestScore,

            averageAccuracy

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: "Internal Server Error"

        });

    }

};

/*
=================================================
Get Test Details
=================================================
*/

exports.getTestDetails = async (req, res) => {

    try {

        const test = await Test.findById(

            req.params.testId

        )

        .populate("questions")

        .populate("answers.questionId");

        if (!test) {

            return res.status(404).json({

                message: "Test not found"

            });

        }

        if (

            test.user.toString() !== req.user.id

        ) {

            return res.status(403).json({

                message: "Access Denied"

            });

        }

        res.json(test);

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: "Internal Server Error"

        });

    }

};