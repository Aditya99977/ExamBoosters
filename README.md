# 🚀 ExamBooster

ExamBooster is a full-stack Government Exam Preparation Platform currently under active development.

The platform is designed to help students prepare for competitive examinations through practice questions, mock tests, performance tracking, intelligent learning tools, and AI-powered assistance.

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

**Current Version:** Day 6 Development Completed

**Development Status:** Backend MVP in Progress

---

# ✨ Features Completed

## Backend Foundation

* Express.js Server Setup
* MongoDB Atlas Integration
* Environment Variable Configuration
* GitHub Version Control

## Authentication System

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes

## Question Bank

* Question Model
* Add Question API
* Get All Questions API
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

## Mock Test Engine

* Start Mock Test API
* Submit Mock Test API
* Automatic Score Calculation
* Answer Storage
* Test History
* Performance Summary
* Test Details
* Dashboard Analytics

## Admin Panel

* Admin Role
* Admin Middleware
* Protected Admin Routes
* Admin Dashboard
* Edit Question API
* Delete Question API
* Bulk CSV Question Upload

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* JWT (JSON Web Token)
* bcryptjs

## File Upload

* Multer
* csv-parser

## API Testing

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
│
├── docs
│   ├── Day1.md
│   ├── Day2.md
│   ├── Day3.md
│   ├── Day4.md
│   ├── Day5.md
│   ├── Day6.md
│   ├── API_Documentation.md
│   ├── Architecture.md
│   └── ProjectRoadmap.md
│
├── middleware
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│   └── uploadMiddleware.js
│
├── models
│   ├── User.js
│   ├── Question.js
│   └── Test.js
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
├── public
├── views
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

# 🔐 API Endpoints

## Authentication

* POST /api/auth/signup
* POST /api/auth/login
* GET /api/dashboard

## Question Bank

* POST /api/questions/add
* GET /api/questions
* GET /api/questions/random?limit=10

## Mock Test

* POST /api/test/start
* POST /api/test/submit/:testId
* GET /api/test/history
* GET /api/test/performance
* GET /api/test/dashboard
* GET /api/test/:testId

## Admin

* GET /api/admin/test
* GET /api/admin/dashboard
* PUT /api/admin/question/:id
* DELETE /api/admin/question/:id
* POST /api/admin/upload/csv

---

# 📅 Development Progress

## ✅ Day 1

* Project Initialization
* Express Server Setup
* MongoDB Atlas Integration
* GitHub Repository Setup

## ✅ Day 2

* Authentication System
* JWT
* Protected Routes

## ✅ Day 3

* Question Bank
* Random Questions
* Question Filtering

## ✅ Day 4

* Mock Test Engine
* Automatic Evaluation
* Result Storage

## ✅ Day 5

* Test History
* Performance Dashboard
* User Analytics

## ✅ Day 6

* Admin Panel
* Role-Based Access Control
* Admin Dashboard
* Edit Question API
* Delete Question API
* Bulk CSV Upload
* CSV Import Testing

---

# 🚀 Upcoming Features

## Day 7

* Student Frontend
* Landing Page
* Login Page
* Registration Page
* Dashboard UI
* Bootstrap Integration
* Backend API Integration

## Future Versions

* MVC Architecture Refactoring
* Excel Upload
* AI Study Assistant
* Leaderboards
* Performance Charts
* Study Planner
* Notifications
* Personalized Recommendations
* Responsive UI
* Live Deployment

---

# 📖 Documentation

The complete project documentation is available inside the **docs/** directory.

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

India

Future Student of **MBA (AI & Data Science)**

---

# 🎯 Vision

ExamBooster aims to become a scalable AI-powered Government Exam Preparation Platform providing:

* High-quality Practice Questions
* Full-Length Mock Tests
* Performance Analytics
* Progress Tracking
* Personalized Learning
* AI-powered Study Assistance
* Intelligent Exam Recommendations

---

# 📈 Project Progress


Backend Development      ████████████████████░░░░░░░░ 65%

Frontend Development     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

AI Integration           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Testing                  █████░░░░░░░░░░░░░░░░░░░░░░ 15%

Deployment               ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Overall Project          ████████████░░░░░░░░░░░░░░░ 30%
```

---

# ⭐ Project Note

ExamBooster is being developed as a long-term portfolio and product following professional software engineering practices, including:

* Git Version Control
* Modular Backend Development
* Secure Authentication
* RESTful API Design
* Documentation-Driven Development
* Incremental Feature Releases
* Scalable Architecture

The long-term goal is to build a production-ready educational platform capable of serving thousands of students preparing for competitive examinations.
