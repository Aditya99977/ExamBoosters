# 🚀 ExamBooster

ExamBooster is a full-stack AI-powered Government Exam Preparation Platform currently under active development.

The platform is designed to help students prepare for competitive examinations through practice questions, mock tests, performance tracking, intelligent analytics, and future AI-powered learning assistance.

---

# 🎯 Supported Government Exams

* IBPS Clerk
* IBPS PO
* SBI Clerk
* SBI PO
* SSC CGL
* SSC CHSL
* RRB NTPC
* RRB Group D
* Other Government Recruitment Exams

---

# 📌 Project Status

**Current Version:** Day 7 Development Completed

**Development Status:** Backend MVP Completed & MVC Architecture Implemented

---

# ✨ Features Completed

## Backend Foundation

* Express.js Server Setup
* MongoDB Atlas Integration
* Environment Variable Configuration
* Professional Folder Structure
* GitHub Version Control

---

## Authentication System

* User Registration
* User Login
* Password Hashing (bcryptjs)
* JWT Authentication
* Protected Routes
* Role-Based Authorization
* JWT Utility Function

---

## Question Bank

* Question Model
* Add Question API
* Get All Questions API
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

---

## Mock Test Engine

* Start Mock Test API
* Submit Mock Test API
* Automatic Score Calculation
* Answer Storage
* Test Result Storage

---

## Student Dashboard

* User Dashboard
* Test History
* Performance Summary
* Dashboard Analytics
* Test Details
* Highest Score
* Average Score
* Recent Tests

---

## Admin Panel

* Admin Authentication
* Admin Middleware
* Admin Dashboard
* Edit Question
* Delete Question
* Bulk CSV Upload
* Subject-wise Analytics

---

## MVC Architecture

* Controllers
* Routes
* Middleware
* Models
* Utilities
* Clean Project Structure
* Business Logic Separation

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JWT
* bcryptjs

## File Upload

* Multer
* csv-parser

## Development Tools

* VS Code
* Thunder Client
* curl

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```text
ExamBooster
│
├── config
│
├── controllers
│   ├── adminController.js
│   ├── authController.js
│   ├── dashboardController.js
│   ├── questionController.js
│   └── testController.js
│
├── docs
│   ├── Day1.md
│   ├── Day2.md
│   ├── Day3.md
│   ├── Day4.md
│   ├── Day5.md
│   ├── Day6.md
│   ├── Day7.md
│   ├── API_Documentation.md
│   ├── Architecture.md
│   └── ProjectRoadmap.md
│
├── middleware
│   ├── adminMiddleware.js
│   ├── authMiddleware.js
│   └── uploadMiddleware.js
│
├── models
│   ├── Question.js
│   ├── Test.js
│   └── User.js
│
├── routes
│   ├── admin.js
│   ├── auth.js
│   ├── dashboard.js
│   ├── question.js
│   └── test.js
│
├── uploads
│
├── utils
│   ├── generateToken.js
│   └── responseHandler.js
│
├── public
├── views
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🔐 REST API Endpoints

## Authentication

* POST /api/auth/signup
* POST /api/auth/login

---

## Student Dashboard

* GET /api/dashboard

---

## Question Bank

* POST /api/questions/add
* GET /api/questions
* GET /api/questions/random?limit=10

---

## Mock Test

* POST /api/test/start
* POST /api/test/submit/:testId
* GET /api/test/history
* GET /api/test/performance
* GET /api/test/dashboard
* GET /api/test/:testId

---

## Admin

* GET /api/admin/test
* GET /api/admin/dashboard
* PUT /api/admin/question/:id
* DELETE /api/admin/question/:id
* POST /api/admin/upload/csv

---

# 📅 Development Timeline

## ✅ Day 1

* Project Initialization
* MongoDB Connection
* Express Server
* GitHub Repository

## ✅ Day 2

* User Authentication
* JWT
* Protected Routes

## ✅ Day 3

* Question Bank
* Random Question Generator
* Filtering APIs

## ✅ Day 4

* Mock Test Engine
* Automatic Evaluation
* Score Calculation

## ✅ Day 5

* Performance Dashboard
* Test History
* Analytics APIs

## ✅ Day 6

* Admin Panel
* Role-Based Authentication
* CSV Bulk Upload
* Admin Dashboard

## ✅ Day 7

* Complete MVC Refactoring
* Controller Layer
* Utility Functions
* Clean Backend Architecture

---

# 🚀 Upcoming Features

## Day 8

* React Frontend
* Vite Setup
* Bootstrap 5
* React Router
* Axios Integration

## Future Versions

* Student Dashboard UI
* Admin Dashboard UI
* Mock Test Interface
* Leaderboard
* AI Study Assistant
* AI Question Generator
* Personalized Learning
* Performance Graphs
* Notifications
* Responsive Design
* Live Deployment

---

# 📖 Documentation

Project documentation is available inside the **docs/** directory.

Includes:

* Daily Development Logs
* API Documentation
* Architecture
* Project Roadmap

---

# 👨‍💻 Developer

**Aditya Thakur**

B.Sc. Information Technology Graduate

Graphic Era Deemed to be University

Future MBA (AI & Data Science) Student

India

---

# 🎯 Vision

ExamBooster aims to become a modern AI-powered education platform offering:

* Practice Questions
* Mock Tests
* Performance Analytics
* Personalized Learning
* AI Study Assistant
* AI Question Generation
* Intelligent Exam Recommendations

The long-term vision is to build a scalable EdTech platform capable of serving thousands of students preparing for government examinations.

---

# 📈 Development Progress

```text
Backend Development        ████████████████████████░░░░░ 80%

Frontend Development       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

AI Features                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Testing                    ███████░░░░░░░░░░░░░░░░░░░░ 20%

Deployment                 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Overall Project            ███████████████░░░░░░░░░░░░ 35%
```

---

# ⭐ Project Highlights

* Professional MVC Architecture
* RESTful API Design
* Secure JWT Authentication
* Role-Based Authorization
* Bulk CSV Import
* Performance Analytics
* Modular & Scalable Backend
* Documentation-Driven Development
* Incremental Feature Development
* Production-Oriented Folder Structure

---

# 📄 License

This project is currently being developed for educational purposes and as a long-term portfolio project. Future licensing may be updated as the platform evolves.
