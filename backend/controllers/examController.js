const mongoose = require("mongoose");

const Exam = require("../models/Exam");
const User = require("../models/User");
const UserExamProgress = require("../models/UserExamProgress");

// =============================================
// Get All Active Exams
// GET /api/exams
// =============================================
const getAllExams = async (req, res) => {
    try {
        const exams = await Exam.find({ isActive: true })
            .sort({ category: 1, name: 1 })
            .select("-__v");

        return res.status(200).json({
            success: true,
            count: exams.length,
            exams,
        });
    } catch (error) {
        console.error("Get Exams Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch exams.",
        });
    }
};

// =============================================
// Select Preferred Exam
// PUT /api/exams/select
// =============================================
const selectPreferredExam = async (req, res) => {
    try {
        const { examId } = req.body;

        if (!examId) {
            return res.status(400).json({
                success: false,
                message: "Exam ID is required.",
            });
        }

        if (!mongoose.Types.ObjectId.isValid(examId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid exam ID.",
            });
        }

        // Check whether the selected exam exists
        const exam = await Exam.findOne({
            _id: examId,
            isActive: true,
        });

        if (!exam) {
            return res.status(404).json({
                success: false,
                message: "Exam not found.",
            });
        }

        // Find logged-in user
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        // Update preferred exam
        user.preferredExam = exam._id;
        await user.save();

        // Check if progress already exists for this exam
        let progress = await UserExamProgress.findOne({
            user: user._id,
            exam: exam._id,
        });

        let progressCreated = false;

        // Create progress only once
        if (!progress) {
            progress = await UserExamProgress.create({
                user: user._id,
                exam: exam._id,

                subjectProgress: exam.subjects.map((subject) => ({
                    subject,
                    accuracy: 0,
                    questionsSolved: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    averageTime: 0,
                })),
            });

            progressCreated = true;
        }

        return res.status(200).json({
            success: true,
            message: "Preferred exam updated successfully.",

            preferredExam: {
                id: exam._id,
                name: exam.name,
                slug: exam.slug,
                category: exam.category,
            },

            progressCreated,
        });
    } catch (error) {
        console.error("Select Exam Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update preferred exam.",
        });
    }
};

module.exports = {
    getAllExams,
    selectPreferredExam,
};