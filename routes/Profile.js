const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {

    getProfile,

    updateProfile

} = require("../controllers/profileController");

/*
====================================
Get Profile
====================================
*/

router.get(

    "/",

    authMiddleware,

    getProfile

);

/*
====================================
Update Profile
====================================
*/

router.put(

    "/",

    authMiddleware,

    updateProfile

);

module.exports = router;