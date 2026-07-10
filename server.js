require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

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
==============================
Middleware
==============================
*/

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Uploaded Files
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

/*
==============================
Routes
==============================
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
404 Route
==============================
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
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