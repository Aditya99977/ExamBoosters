const express = require("express");
const router = express.Router();

const {
  createMockTest,
  getAllMockTests,
  getMockTest,
  updateMockTest,
  deleteMockTest,
  toggleMockTestStatus,
  getMockTestStatistics,
} = require("../controllers/MockTestController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Create Mock Test
router.post("/", protect, admin, createMockTest);

// Get All Mock Tests
router.get("/", protect, admin, getAllMockTests);

// Get Statistics
router.get("/statistics", protect, admin, getMockTestStatistics);

// Get Single Mock Test
router.get("/:id", protect, admin, getMockTest);

// Update Mock Test
router.put("/:id", protect, admin, updateMockTest);

// Delete Mock Test
router.delete("/:id", protect, admin, deleteMockTest);

// Publish / Unpublish
router.patch("/:id/status", protect, admin, toggleMockTestStatus);

module.exports = router;
