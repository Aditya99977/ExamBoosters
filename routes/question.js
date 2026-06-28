const express = require("express");

const router = express.Router();

const {

    addQuestion,

    getQuestions,

    getRandomQuestions

} = require("../controllers/questionController");

/*
Add Question
*/

router.post("/add", addQuestion);

/*
Get All Questions
*/

router.get("/", getQuestions);

/*
Get Random Questions
*/

router.get("/random", getRandomQuestions);

module.exports = router;