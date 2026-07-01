const express = require("express");

const auth = require("../middleware/authMiddleware");

const {
    getProfile,
    updateProfile
} = require("../controllers/profileController");

const router = express.Router();

/*
==============================
Profile Routes
==============================
*/

// Get Logged-in User Profile
router.get("/", auth, getProfile);

// Update Logged-in User Profile
router.put("/", auth, updateProfile);

module.exports = router;