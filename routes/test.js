const express = require("express");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

const {

    startTest,

    submitTest,

    getHistory,

    getPerformance,

    getDashboard,

    getTestDetails

} = require("../controllers/testController");

/*
Start Test
*/

router.post("/start", auth, startTest);

/*
Submit Test
*/

router.post("/submit/:testId", auth, submitTest);

/*
Get Test History
*/

router.get("/history", auth, getHistory);

/*
Performance Summary
*/

router.get("/performance", auth, getPerformance);

/*
Dashboard API
*/

router.get("/dashboard", auth, getDashboard);

/*
Get Test Details
*/

router.get("/:testId", auth, getTestDetails);

module.exports = router;