const express = require("express");

const router = express.Router();

const {
    getAllExams,
    selectPreferredExam,
} = require("../controllers/examController");

// Import Auth Middleware
const authMiddleware = require("../middleware/authMiddleware");

// =============================================
// Public Routes
// =============================================

// Get All Active Exams
router.get("/", getAllExams);

// =============================================
// Protected Routes
// =============================================

// Select Preferred Exam
router.put("/select", authMiddleware, selectPreferredExam);

module.exports = router;