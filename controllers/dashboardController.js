const User = require("../models/User");
const Test = require("../models/Test");

exports.getDashboard = async (req, res) => {

    try {

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        const tests = await Test.find({

            user: req.user.id,

            submitted: true

        }).sort({

            createdAt: -1

        });

        const testsAttempted = tests.length;

        const highestScore =
            tests.length > 0
                ? Math.max(...tests.map(test => test.score))
                : 0;

        const averageAccuracy =
            tests.length > 0
                ? (
                    tests.reduce(
                        (sum, test) => sum + test.accuracy,
                        0
                    ) / tests.length
                ).toFixed(1)
                : 0;

        const recentTests = tests.slice(0, 5).map(test => ({

            exam: test.exam,

            score: test.score,

            accuracy: test.accuracy,

            date: test.submittedAt

        }));

        const weeklyPerformance = tests
            .slice(0, 7)
            .reverse()
            .map(test => ({

                date: test.submittedAt,

                score: test.score

            }));

        res.json({

            user: {

                name: user.name,

                email: user.email,

                examTarget: user.examTarget

            },

            stats: {

                practiceQuestions: 0,

                mockTestsCompleted: testsAttempted,

                accuracy: averageAccuracy,

                highestScore: highestScore

            },

            subjectProgress: [

                {

                    subject: "Reasoning",

                    progress: 0

                },

                {

                    subject: "English",

                    progress: 0

                },

                {

                    subject: "Quantitative Aptitude",

                    progress: 0

                },

                {

                    subject: "General Awareness",

                    progress: 0

                }

            ],

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