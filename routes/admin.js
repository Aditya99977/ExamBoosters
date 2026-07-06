const express = require("express");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {

    adminTest,

    updateQuestion,

    deleteQuestion,

    getAdminDashboard,

    uploadCSV,

    getAllUsers,

    getAllQuestions

} = require("../controllers/adminController");

const router = express.Router();

/*
========================================
Admin Test
========================================
*/

router.get(

    "/test",

    auth,

    admin,

    adminTest

);

/*
========================================
Update Question
========================================
*/

router.put(

    "/question/:id",

    auth,

    admin,

    updateQuestion

);

/*
========================================
Delete Question
========================================
*/

router.delete(

    "/question/:id",

    auth,

    admin,

    deleteQuestion

);

/*
========================================
Admin Dashboard
========================================
*/

router.get(

    "/dashboard",

    auth,

    admin,

    getAdminDashboard

);

/*
========================================
Get All Users
========================================
*/

router.get(

    "/users",

    auth,

    admin,

    getAllUsers

);

/*
========================================
Get All Questions
========================================
*/

router.get(

    "/questions",

    auth,

    admin,

    getAllQuestions

);

/*
========================================
Bulk CSV Upload
========================================
*/

router.post(

    "/upload/csv",

    auth,

    admin,

    upload.single("file"),

    uploadCSV

);

module.exports = router;