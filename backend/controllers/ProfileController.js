const User = require("../models/User");
const Test = require("../models/Test");

/*
==============================
Get Profile
==============================
*/

exports.getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id)
            .populate("preferredExam", "name slug category")
            .select("-password");

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found."

            });

        }

        /*
        =====================================
        Calculate Statistics
        =====================================
        */

        const tests = await Test.find({

            user: req.user.id,

            submitted: true

        });

        const testsAttempted = tests.length;

        const highestScore = tests.length > 0
            ? Math.max(...tests.map(test => test.score))
            : 0;

        return res.status(200).json({

            success: true,

            _id: user._id,

            name: user.name,

            email: user.email,

            role: user.role,

            preferredExam: user.preferredExam,

            profileImage: user.profileImage,

            studyStats: user.studyStats,

            studyStreak: user.studyStreak,

            longestStudyStreak: user.longestStudyStreak,

            createdAt: user.createdAt,

            testsAttempted,

            highestScore,

            status: user.status,

        });

    }

    catch (err) {

        console.error("Get Profile Error:", err);

        return res.status(500).json({

            success: false,

            message: "Failed to fetch profile."

        });

    }

};

/*
==============================
Update Profile
==============================
*/

exports.updateProfile = async (req, res) => {

    try {

        const {

            name,

            email,

        } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found."

            });

        }

        user.name = name?.trim() || user.name;

        user.email = email?.trim().toLowerCase() || user.email;

        await user.save();

        return res.status(200).json({

            success: true,

            message: "Profile updated successfully.",

            user,

        });

    }

    catch (err) {

        console.error("Update Profile Error:", err);

        return res.status(500).json({

            success: false,

            message: "Failed to update profile."

        });

    }

};

/*
==============================
Upload Profile Image
==============================
*/

exports.uploadProfileImage = async (req, res) => {

    try {

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found."

            });

        }

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Please upload an image."

            });

        }

        user.profileImage = req.file.filename;

        await user.save();

        return res.status(200).json({

            success: true,

            message: "Profile image updated successfully.",

            profileImage: user.profileImage,

        });

    }

    catch (err) {

        console.error("Upload Profile Image Error:", err);

        return res.status(500).json({

            success: false,

            message: "Failed to upload profile image."

        });

    }

};