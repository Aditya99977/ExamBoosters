const express = require("express");

const router = express.Router();

const {
    signup,
    login,
    adminLogin,
} = require("../controllers/authController");

/*
=================================================
User Registration
=================================================
*/

router.post("/signup", signup);

/*
=================================================
Student Login
=================================================
*/

router.post("/login", login);

/*
=================================================
Admin Login
=================================================
*/

router.post("/admin/login", adminLogin);

module.exports = router;