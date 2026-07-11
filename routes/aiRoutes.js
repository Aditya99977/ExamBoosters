const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    chatWithAI,

    getChatHistory

} = require("../controllers/aiController");


router.post(

    "/chat",

    authMiddleware,

    chatWithAI

);

router.get(

    "/history",

    authMiddleware,

    getChatHistory

);

module.exports = router;