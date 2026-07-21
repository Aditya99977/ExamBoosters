require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const morgan = require("morgan");

// Routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const profileRoutes = require("./routes/profile");
const questionRoutes = require("./routes/question");
const testRoutes = require("./routes/test");
const adminRoutes = require("./routes/admin");
const mockTestRoutes = require("./routes/MockTestRoute");
const paperRoutes = require("./routes/paperRoutes");

const app = express();

/*
====================================
Security Middleware
====================================
*/

// Secure HTTP Headers
app.use(helmet());

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message:
            "Too many requests. Please try again after 15 minutes.",
    },
});

app.use("/api", limiter);

/*
====================================
CORS
====================================
*/

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

/*
====================================
Body Parsers
====================================
*/

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

/*
====================================
Request Logger
====================================
*/

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

/*
====================================
Static Files
====================================
*/

app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

/*
====================================
API Routes
====================================
*/

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/test", testRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/mocktests", mockTestRoutes);
app.use("/api/papers", paperRoutes);

/*
====================================
Root Route
====================================
*/

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        application: "VNAverse",
        company: "Vision Nexus Academy",
        message: "Welcome to the VNAverse Backend API.",
        version: "1.0.0",
        status: "Running",
    });
});

/*
====================================
Health Check
====================================
*/

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

/*
====================================
404 Handler
====================================
*/

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found.",
    });
});

/*
====================================
MongoDB Connection
====================================
*/

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully");
        console.log("🎓 VNAverse Database Ready");
    })
    .catch((error) => {
        console.error("❌ MongoDB Connection Failed");
        console.error(error.message);
        process.exit(1);
    });

/*
====================================
Server
====================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("========================================");
    console.log("🚀 VNAverse Backend Started Successfully");
    console.log("🏢 Vision Nexus Academy");
    console.log(`🌐 Server URL : http://localhost:${PORT}`);
    console.log(`📡 API Base   : http://localhost:${PORT}/api`);
    console.log(`❤️ Health     : http://localhost:${PORT}/health`);
    console.log("========================================");
});