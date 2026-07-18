const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {

    addQuestion,

    getQuestions,

    getRandomQuestions

} = require("../controllers/questionController");

/*
Add Question
*/

router.post(

    "/add",

    auth,

    admin,

    addQuestion

);

/*
Get All Questions
*/

router.get("/", getQuestions);

/*
Get Random Questions
*/

router.get("/random", getRandomQuestions);

module.exports = router;