const fs = require("fs");
const csv = require("csv-parser");

const Question = require("../models/Question");
const User = require("../models/User");
const Test = require("../models/Test");

/*
Admin Test Route
*/

exports.adminTest = async (req, res) => {

    res.json({
        message: "Welcome Admin"
    });

};

/*
Update Question
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

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
Delete Question
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

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
Admin Dashboard
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

        res.json({

            totalUsers,

            totalQuestions,

            totalTests,

            subjectStats

        });

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/*
Bulk CSV Upload
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

    } catch (err) {

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

        res.json(users);

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

