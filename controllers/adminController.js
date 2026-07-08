const fs = require("fs");
const csv = require("csv-parser");

const Question = require("../models/Question");
const User = require("../models/User");
const Test = require("../models/Test");

/*
========================================
Admin Test Route
========================================
*/

exports.adminTest = async (req, res) => {

    res.json({
        message: "Welcome Admin"
    });

};

/*
========================================
Update Question
========================================
*/

exports.updateQuestion = async (req, res) => {

    try {

        const question = await Question.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!question) {

            return res.status(404).json({
                message: "Question not found"
            });

        }

        res.json({

            message: "Question updated successfully",

            question

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
========================================
Delete Question
========================================
*/

exports.deleteQuestion = async (req, res) => {

    try {

        const question = await Question.findByIdAndDelete(req.params.id);

        if (!question) {

            return res.status(404).json({

                message: "Question not found"

            });

        }

        res.json({

            message: "Question deleted successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
========================================
Admin Dashboard
========================================
*/

exports.getAdminDashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalQuestions = await Question.countDocuments();

        const totalTests = await Test.countDocuments();

        const subjectStats = await Question.aggregate([

            {
                $group: {

                    _id: "$subject",

                    totalQuestions: {

                        $sum: 1

                    }

                }

            },

            {

                $sort: {

                    totalQuestions: -1

                }

            }

        ]);

        const averageScore = await Test.aggregate([

            {

                $group: {

                    _id: null,

                    average: {

                        $avg: "$score"

                    }

                }

            }

        ]);

        res.json({

            totalUsers,

            totalQuestions,

            totalTests,

            averageScore: averageScore.length
                ? averageScore[0].average.toFixed(2)
                : 0,

            subjectStats

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
========================================
Bulk CSV Upload
========================================
*/

exports.uploadCSV = async (req, res) => {

    try {

        const questions = [];

        fs.createReadStream(req.file.path)

            .pipe(csv())

            .on("data", (row) => {

                questions.push({

                    question: row.question,

                    options: [

                        row.option1,

                        row.option2,

                        row.option3,

                        row.option4

                    ],

                    correctAnswer: row.correctAnswer,

                    subject: row.subject,

                    difficulty: row.difficulty

                });

            })

            .on("end", async () => {

                await Question.insertMany(questions);

                fs.unlinkSync(req.file.path);

                res.json({

                    message: `${questions.length} questions uploaded successfully`

                });

            });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
========================================
Get All Users
========================================
*/

exports.getAllUsers = async (req, res) => {

    try {

        const users = await User.find()
            .select("-password")
            .sort({

                createdAt: -1

            });

        const result = await Promise.all(

            users.map(async (user) => {

                const tests = await Test.find({

                    user: user._id,

                    submitted: true

                });

                const totalTests = tests.length;

                const averageScore = totalTests

                    ? Number(

                        (

                            tests.reduce((sum, test) => sum + test.score, 0)

                            / totalTests

                        ).toFixed(2)

                    )

                    : 0;

                const highestScore = totalTests

                    ? Math.max(...tests.map(test => test.score))

                    : 0;

                return {

                    ...user.toObject(),

                    totalTests,

                    averageScore,

                    highestScore

                };

            })

        );

        res.json(result);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
========================================
Get User Details
========================================
*/

exports.getUserDetails = async (req, res) => {

    try {

        const user = await User.findById(req.params.id)

            .select("-password");

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        const tests = await Test.find({

            user: user._id

        })

            .populate("questions")

            .sort({

                createdAt: -1

            });

        res.json({

            user,

            tests

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
========================================
Delete User
========================================
*/

exports.deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        await Test.deleteMany({

            user: req.params.id

        });

        await User.findByIdAndDelete(req.params.id);

        res.json({

            message: "User deleted successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
========================================
Get All Questions
========================================
*/

exports.getAllQuestions = async (req, res) => {

    try {

        const questions = await Question.find()

            .sort({

                createdAt: -1

            });

        res.json(questions);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};