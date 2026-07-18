const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware.js");

const {

    getProfile,

    updateProfile,

    uploadProfileImage

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

/*
====================================
Upload Profile Image
====================================
*/

router.put(

    "/upload-profile-image",

    authMiddleware,

    upload.single("profileImage"),

    uploadProfileImage

);

module.exports = router;