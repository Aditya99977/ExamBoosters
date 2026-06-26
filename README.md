# 🚀 ExamBooster

ExamBooster is a full-stack Government Exam Preparation Platform currently under active development.

The platform is designed to help students prepare for competitive examinations through practice questions, mock tests, performance tracking, and intelligent learning tools.

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

**Current Version:** Day 5 Development Completed

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

## Question Bank Engine

* Question Model
* Add Question API
* Get All Questions API
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

## Mock Test Engine

* Test Model
* Start Mock Test API
* Submit Mock Test API
* Automatic Score Calculation
* Answer Storage
* Test Result Storage

## Performance Dashboard

* Test History API
* Performance Summary API
* Dashboard API
* Test Details API
* Recent Tests
* Highest Score Tracking
* Average Score Calculation

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

## API Testing

* Thunder Client

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```text
ExamBooster
│
├── docs
│   ├── Day1.md
│   ├── Day2.md
│   ├── Day3.md
│   ├── Day4.md
│   ├── Day5.md
│   ├── API_Documentation.md
│   ├── Architecture.md
│   └── ProjectRoadmap.md
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   ├── Question.js
│   └── Test.js
│
├── routes
│   ├── auth.js
│   ├── dashboard.js
│   ├── question.js
│   └── test.js
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

## Analytics

* GET /api/test/history
* GET /api/test/performance
* GET /api/test/dashboard
* GET /api/test/:testId

---

# 📅 Development Progress

## ✅ Day 1

* Project Initialization
* Express Server Setup
* MongoDB Atlas Integration
* GitHub Repository Setup

## ✅ Day 2

* User Authentication
* Registration API
* Login API
* JWT Authentication
* Protected Dashboard

## ✅ Day 3

* Question Bank
* Question APIs
* Random Question Generator
* Question Filtering

## ✅ Day 4

* Mock Test Engine
* Start Test API
* Submit Test API
* Automatic Score Calculation
* Answer Storage
* Result Storage

## ✅ Day 5

* Test History API
* Performance Summary API
* Dashboard API
* Test Details API
* User Analytics

---

# 🚀 Upcoming Features

## Day 6

* Admin Dashboard
* Edit Questions
* Delete Questions
* Bulk Question Upload (CSV)
* Bulk Question Upload (Excel)

## Day 7

* MVC Architecture Refactoring
* Controllers
* Services
* Validation
* Utility Functions

## Future Development

* Student Dashboard UI
* Admin Dashboard UI
* Leaderboard
* AI Study Assistant
* Performance Graphs
* Personalized Learning Recommendations
* Responsive Frontend
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

---

# 🎯 Vision

ExamBooster aims to become a modern, scalable government exam preparation platform that provides:

* High-quality practice questions
* Full-length mock tests
* Performance analytics
* Progress tracking
* Personalized learning recommendations
* AI-powered exam assistance

The long-term vision is to help aspirants prepare effectively for competitive examinations such as IBPS, SBI, SSC, RRB, and other government recruitment exams through a scalable, secure, and user-friendly learning platform.

---

# ⭐ Project Note

ExamBooster is being developed as a long-term portfolio and learning project following professional software engineering practices, including version control, structured documentation, modular architecture, and incremental feature development.

Current Progress:

Backend Development: **~50% Complete**

Overall Project Completion: **~30% Complete**
