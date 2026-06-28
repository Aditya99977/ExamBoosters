const User = require("../models/User");

/*
User Dashboard
*/

exports.getDashboard = async (req, res) => {

    try {

        const user = await User.findById(req.user.id);

        res.json({

            name: user.name,

            email: user.email,

            examTarget: user.examTarget,

            score: user.score,

            testsAttempted: user.testsAttempted

        });

    } catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};