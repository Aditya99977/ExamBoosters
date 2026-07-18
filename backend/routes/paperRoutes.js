const express = require("express");
const router = express.Router();

const {
  uploadPaper,
  getAllPapers,
  getPaperById,
  updatePaper,
  deletePaper,
  downloadPaper,
  getStatistics,
} = require("../controllers/paperController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const uploadPaperMiddleware = require("../middleware/uploadPaper");


// ==============================
// Public Routes
// ==============================

// Get All Published Papers
router.get("/", getAllPapers);

// Download Paper
router.get("/download/:id", downloadPaper);

// Get Single Paper
router.get("/:id", getPaperById);


// ==============================
// Admin Routes
// ==============================

// Upload Paper
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  uploadPaperMiddleware.single("pdf"),
  uploadPaper
);

// Update Paper
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  uploadPaperMiddleware.single("pdf"),
  updatePaper
);

// Delete Paper
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deletePaper
);

// Statistics
router.get(
  "/statistics",
  authMiddleware,
  adminMiddleware,
  getStatistics
);

module.exports = router;