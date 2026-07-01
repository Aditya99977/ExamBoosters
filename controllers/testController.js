const Test = require("../models/Test");
const Question = require("../models/Question");

/*
==============================
Start Test
==============================
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

        res.status(500).json({

            message: err.message

        });

    }

};

/*
==============================
Submit Test
==============================
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

        const answers = req.body.answers || [];

        for (const answer of answers) {

            const question = await Question.findById(answer.questionId);

            if (

                question &&

                question.correctAnswer === answer.selectedAnswer

            ) {

                score++;

            }

        }

        const accuracy = test.totalQuestions > 0

            ? Number(((score / test.totalQuestions) * 100).toFixed(2))

            : 0;

        test.answers = answers;

        test.score = score;

        test.accuracy = accuracy;

        test.submitted = true;

        test.submittedAt = new Date();

        await test.save();

        res.json({

            message: "Test submitted successfully",

            exam: test.exam,

            score,

            totalQuestions: test.totalQuestions,

            accuracy,

            submittedAt: test.submittedAt

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }
    

};
/*
==============================
Get Test History
==============================
*/

exports.getHistory = async (req, res) => {

    try {

        const tests = await Test.find({

            user: req.user.id,

            submitted: true

        }).sort({

            submittedAt: -1

        });

        res.json(tests);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
==============================
Performance Summary
==============================
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

            (sum, test) => sum + test.accuracy,

            0

        );

        const highestScore = Math.max(

            ...tests.map(test => test.score)

        );

        const latestScore = tests[tests.length - 1].score;

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

        res.status(500).json({

            message: err.message

        });

    }

};

/*
==============================
Dashboard API
==============================
*/

exports.getDashboard = async (req, res) => {

    try {

        const tests = await Test.find({

            user: req.user.id,

            submitted: true

        }).sort({

            submittedAt: -1

        });

        const totalTests = tests.length;

        const highestScore = totalTests
            ? Math.max(...tests.map(test => test.score))
            : 0;

        const averageAccuracy = totalTests
            ? Number(
                (
                    tests.reduce(
                        (sum, test) => sum + test.accuracy,
                        0
                    ) / totalTests
                ).toFixed(2)
            )
            : 0;

        const recentTests = tests.slice(0, 5).map(test => ({

            exam: test.exam,

            score: test.score,

            accuracy: test.accuracy,

            submittedAt: test.submittedAt

        }));

        const weeklyPerformance = tests
            .slice(0, 7)
            .reverse()
            .map(test => ({

                date: test.submittedAt,

                score: test.score

            }));

        res.json({

            stats: {

                practiceQuestions: 0,

                mockTestsCompleted: totalTests,

                accuracy: averageAccuracy,

                highestScore

            },

            recentTests,

            weeklyPerformance

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
==============================
Get Test Details
==============================
*/

exports.getTestDetails = async (req, res) => {

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

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};