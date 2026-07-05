const User = require("../models/User");
const Test = require("../models/Test");

/*
==============================
Get Profile
==============================
*/

exports.getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {

            return res.status(404).json({

                message: "User not found"

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

        res.json({

            _id: user._id,

            name: user.name,

            email: user.email,

            role: user.role,

            examTarget: user.examTarget,

            createdAt: user.createdAt,

            testsAttempted,

            highestScore

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: err.message

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

            examTarget

        } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        user.name = name;

        user.email = email;

        user.examTarget = examTarget;

        await user.save();

        res.json({

            message: "Profile Updated Successfully",

            user

        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: err.message

        });

    }

};