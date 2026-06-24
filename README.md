# 🚀 ExamBooster

ExamBooster is a full-stack Government Exam Preparation Platform currently under development.

The goal of this project is to help students prepare for competitive examinations such as:

1. IBPS Clerk
2. IBPS PO
3. SBI Clerk
4. SBI PO
5. SSC CGL
6. SSC CHSL
7. RRB Exams
8. Other Government Recruitment Exams

---

# 📖 Project Status

### Current Version

Day 3 Development Completed

---

# ✅ Completed Features

### Backend Foundation

* MongoDB Atlas Integration
* Express.js Server Setup
* Environment Configuration
* GitHub Version Control Setup

### Authentication System

* User Registration API
* User Login API
* Password Hashing using bcryptjs
* JWT Authentication
* Protected Dashboard Route

### Question Bank Engine

* Question Model
* Add Question API
* Get Questions API
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

---

# 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Version Control

* Git
* GitHub

---

# 📂 Project Structure

ExamBooster

├── models

│   ├── User.js

│   └── Question.js

│

├── routes

│   ├── auth.js

│   ├── dashboard.js

│   └── question.js

│

├── middleware

│   └── authMiddleware.js

│

├── docs

│   ├── Day1.md

│   ├── Day2.md

│   ├── Day3.md

│   ├── API_Documentation.md

│   ├── Architecture.md

│   └── ProjectRoadmap.md

│

├── .env

├── .gitignore

├── server.js

├── package.json

└── README.md

---

# 🔐 Implemented APIs

## Authentication APIs

### Signup

POST /api/auth/signup

Registers a new user.

### Login

POST /api/auth/login

Authenticates user and generates JWT token.

### Dashboard

GET /api/dashboard

Protected route accessible only with a valid JWT token.

---

## Question APIs

### Add Question

POST /api/questions/add

Adds a question to the database.

### Get All Questions

GET /api/questions

Returns all questions.

### Filter by Subject

GET /api/questions?subject=Computer%20Knowledge

Returns questions from a specific subject.

### Filter by Difficulty

GET /api/questions?difficulty=Easy

Returns questions based on difficulty level.

### Random Questions

GET /api/questions/random?limit=10

Returns random questions for mock tests.

---

# 📅 Development Progress

## Day 1

* Project Setup
* Express Server Setup
* MongoDB Atlas Connection
* GitHub Repository Setup

## Day 2

* User Model Creation
* Signup API
* Login API
* JWT Authentication
* Protected Dashboard Route

## Day 3

* Question Model Creation
* Add Question API
* Get Questions API
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

---

# 🎯 Upcoming Features

## Day 4

* Mock Test Engine
* Start Test API
* Submit Test API
* Score Calculation

## Future Features

* Test History
* Performance Analytics
* Progress Tracking
* Leaderboard
* Admin Panel
* AI-Powered Exam Assistance
* Personalized Learning Recommendations

---

# 👨‍💻 Developer

Aditya Thakur

B.Sc. Information Technology Graduate

Graphic Era Deemed to be University

India

---

# 📌 Project Goal

ExamBooster aims to become a modern government exam preparation platform that provides:

* High-quality practice questions
* Full-length mock tests
* Performance analytics
* Progress tracking
* Personalized learning recommendations
* AI-powered exam assistance

The long-term vision is to help aspirants prepare effectively for competitive examinations such as IBPS, SBI, SSC, RRB, and other government recruitment exams through a scalable and user-friendly learning platform.
