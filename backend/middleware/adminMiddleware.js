const User = require("../models/User");

const adminMiddleware = async (req, res, next) => {
    try {
        // Fetch only required fields
        const user = await User.findById(req.user.id).select("role status");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        // Future-ready account status check
        if (user.status && user.status !== "active") {
            return res.status(403).json({
                success: false,
                message: "Your account has been suspended.",
            });
        }

        // Admin role check
        if (user.role !== "admin") {
            return res.status(403).json({
                success: false,
                message: "Access denied. Admin privileges required.",
            });
        }

        next();
    } catch (error) {
        console.error("Admin Middleware Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error.",
        });
    }
};

module.exports = adminMiddleware;