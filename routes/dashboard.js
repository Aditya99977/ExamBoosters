const express = require("express");

const auth = require("../middleware/authMiddleware");

const User = require("../models/User");

const router = express.Router();

router.get("/", auth, async (req, res) => {

    const user = await User.findById(req.user.id);

    res.json({
        name: user.name,
        email: user.email,
        examTarget: user.examTarget,
        score: user.score,
        testsAttempted: user.testsAttempted
    });

});

module.exports = router;