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

    getUserDetails,

    deleteUser,

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
User Management
========================================
*/

/*
Get All Users
*/

router.get(

    "/users",

    auth,

    admin,

    getAllUsers

);

/*
Get User Details
*/

router.get(

    "/users/:id",

    auth,

    admin,

    getUserDetails

);

/*
Delete User
*/

router.delete(

    "/users/:id",

    auth,

    admin,

    deleteUser

);

/*
========================================
Question Management
========================================
*/

/*
Get All Questions
*/

router.get(

    "/questions",

    auth,

    admin,

    getAllQuestions

);

/*
Update Question
*/

router.put(

    "/question/:id",

    auth,

    admin,

    updateQuestion

);

/*
Delete Question
*/

router.delete(

    "/question/:id",

    auth,

    admin,

    deleteQuestion

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