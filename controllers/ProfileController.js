const User = require("../models/User");

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

        res.json(user);

    }

    catch (err) {

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

        res.status(500).json({

            message: err.message

        });

    }

};