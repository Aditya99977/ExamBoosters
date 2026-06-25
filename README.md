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

**Current Version:** Day 4 Development Completed

**Development Status:** Backend MVP in Progress

ExamBooster is currently under active development. New features are being added incrementally, with frontend development and deployment planned after the backend reaches a stable MVP.

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

### Register User

POST `/api/auth/signup`

### Login User

POST `/api/auth/login`

### Dashboard

GET `/api/dashboard`

---

## Question Management

### Add Question

POST `/api/questions/add`

### Get All Questions

GET `/api/questions`

### Filter Questions by Subject

GET `/api/questions?subject=Computer%20Knowledge`

### Filter Questions by Difficulty

GET `/api/questions?difficulty=Easy`

### Get Random Questions

GET `/api/questions/random?limit=10`

---

## Mock Test

### Start Mock Test

POST `/api/test/start`

### Submit Mock Test

POST `/api/test/submit/:testId`

---

# 📅 Development Progress

## ✅ Day 1

* Project Initialization
* Express Server Setup
* MongoDB Atlas Integration
* GitHub Repository Setup

## ✅ Day 2

* User Model
* Registration API
* Login API
* JWT Authentication
* Protected Dashboard

## ✅ Day 3

* Question Model
* Add Question API
* Get Questions API
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

## ✅ Day 4

* Test Model
* Start Mock Test API
* Submit Mock Test API
* Automatic Score Calculation
* Save User Answers
* Save Test Results

---

# 🚀 Upcoming Features

## Day 5

* Test History
* User Performance Dashboard
* Average Score API
* Best Score API
* Recent Tests API

## Day 6

* Admin Dashboard
* Edit Questions
* Delete Questions
* Bulk Question Upload (CSV)
* Bulk Question Upload (Excel)

## Future Development

* MVC Architecture Refactoring
* Student Dashboard
* Admin Dashboard
* Performance Analytics
* Leaderboard
* AI Study Assistant
* Personalized Learning Recommendations
* Responsive Frontend
* Live Deployment

---

# 📖 Documentation

Detailed project documentation is available in the **docs/** directory, including:

* Daily Development Logs
* API Documentation
* Project Architecture
* Development Roadmap

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
* Performance tracking
* Progress analytics
* Personalized learning recommendations
* AI-powered exam assistance

The long-term vision is to build an accessible platform that helps aspirants prepare effectively for competitive examinations such as IBPS, SBI, SSC, RRB, and other government recruitment exams.

---

# ⭐ Project Note

This project is being developed as a long-term portfolio and learning initiative. Features are added incrementally with a focus on clean architecture, scalability, and real-world software development practices.
