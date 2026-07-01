require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const profileRoutes = require("./routes/profile");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const questionRoutes = require("./routes/question");
const testRoutes = require("./routes/test");
const adminRoutes = require("./routes/admin");

const app = express();

/*
==============================
Middleware
==============================
*/

// Allow requests from React frontend
app.use(cors());

// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
==============================
Routes
==============================
*/
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/test", testRoutes);
app.use("/api/admin", adminRoutes);

/*
==============================
MongoDB Connection
==============================
*/

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {

        console.log("✅ MongoDB Connected Successfully");

    })
    .catch((err) => {

        console.log("❌ MongoDB Connection Error");

        console.log(err.message);

    });

/*
==============================
Default Route
==============================
*/

app.get("/", (req, res) => {

    res.send("🚀 ExamBooster Backend Running");

});

/*
==============================
Server
==============================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on port ${PORT}`);

});