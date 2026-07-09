require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const profileRoutes = require("./routes/profile");
const questionRoutes = require("./routes/question");
const testRoutes = require("./routes/test");
const adminRoutes = require("./routes/admin");
const mockTestRoutes = require("./routes/MockTestRoute");

const app = express();

/*
==============================
Middleware
==============================
*/

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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