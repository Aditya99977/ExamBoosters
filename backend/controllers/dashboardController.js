const User = require("../models/User");
const Test = require("../models/Test");

exports.getDashboard = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).lean();

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        const tests = await Test.find({

            user: req.user.id,

            submitted: true

        })
        .sort({

            submittedAt: -1

        })
        .lean();

        /* ===========================
           Dashboard Statistics
        =========================== */

        const totalTests = tests.length;

        const practiceQuestions = tests.reduce(

            (total, test) => total + (test.answers?.length || 0),

            0

        );

        const totalScore = tests.reduce(

            (sum, test) => sum + test.score,

            0

        );

        const highestScore = totalTests > 0

            ? Math.max(...tests.map(test => test.score))

            : 0;

        const averageScore = totalTests > 0

            ? Number((totalScore / totalTests).toFixed(2))

            : 0;

        const averageAccuracy = totalTests > 0

            ? Number(

                (

                    tests.reduce(

                        (sum, test) => sum + (test.accuracy || 0),

                        0

                    ) / totalTests

                ).toFixed(1)

            )

            : 0;

        /* ===========================
           Recent Tests
        =========================== */

        const recentTests = tests

            .slice(0, 5)

            .map(test => ({

                exam: test.exam,

                score: test.score,

                accuracy: test.accuracy,

                submittedAt: test.submittedAt

            }));

        /* ===========================
           Weekly Performance
        =========================== */

        const weeklyPerformance = tests

            .slice(0, 7)

            .reverse()

            .map(test => ({

                date: test.submittedAt,

                score: test.score

            }));

        /* ===========================
           Subject Progress Analytics
        =========================== */

        const subjectStats = {};

        tests.forEach(test => {

            test.answers.forEach(answer => {

                if (!answer.subject) return;

                if (!subjectStats[answer.subject]) {

                    subjectStats[answer.subject] = {

                        total: 0,

                        correct: 0

                    };

                }

                subjectStats[answer.subject].total++;

                if (answer.isCorrect) {

                    subjectStats[answer.subject].correct++;

                }

            });

        });

        const subjectProgress = Object.keys(subjectStats).map(subject => ({

            subject,

            progress: Number(

                (

                    subjectStats[subject].correct /

                    subjectStats[subject].total

                    * 100

                ).toFixed(1)

            )

        }));

        /* ===========================
           Dashboard Response
        =========================== */

        res.json({

            user: {

                name: user.name,

                email: user.email,

                examTarget: user.examTarget,

                studyStreak: user.studyStreak || 0,

                 longestStudyStreak: user.longestStudyStreak || 0,

                 lastStudyDate: user.lastStudyDate,

            },

            stats: {

                practiceQuestions,

                mockTestsCompleted: totalTests,

                averageScore,

                accuracy: averageAccuracy,

                highestScore

            },

            subjectProgress,

            recentTests,

            weeklyPerformance

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: "Internal Server Error"

        });

    }

};