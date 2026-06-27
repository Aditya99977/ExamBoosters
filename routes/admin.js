const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");

/*
==============================
Middleware
==============================
*/

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

/*
==============================
Models
==============================
*/

const Question = require("../models/Question");
const User = require("../models/User");
const Test = require("../models/Test");

const router = express.Router();

/*
====================================================
Admin Test Route
Checks whether Admin Authentication is working
GET /api/admin/test
====================================================
*/

router.get("/test", auth, admin, async (req, res) => {

    res.json({
        message: "Welcome Admin"
    });

});

/*
====================================================
Update Question
PUT /api/admin/question/:id
====================================================
*/

router.put("/question/:id", auth, admin, async (req, res) => {

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

});

/*
====================================================
Delete Question
DELETE /api/admin/question/:id
====================================================
*/

router.delete("/question/:id", auth, admin, async (req, res) => {

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

});

/*
====================================================
Admin Dashboard
GET /api/admin/dashboard

Returns:
- Total Users
- Total Questions
- Total Tests
- Subject Wise Statistics
====================================================
*/

router.get("/dashboard", auth, admin, async (req, res) => {

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

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

});

/*
====================================================
Bulk Upload Questions (CSV)

POST /api/admin/upload/csv

Upload Form Field:
file
====================================================
*/

router.post(

    "/upload/csv",

    auth,

    admin,

    upload.single("file"),

    async (req, res) => {

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

                    // Delete uploaded CSV after importing
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

    }

);

module.exports = router;