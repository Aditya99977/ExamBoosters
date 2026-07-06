# ExamBooster Architecture

# High-Level Architecture

```
React.js Frontend
        │
        ▼
Axios Service Layer
        │
        ▼
Express.js REST APIs
        │
        ▼
Authentication & Authorization Middleware
        │
        ▼
Controllers
        │
        ▼
MongoDB Models (Mongoose)
        │
        ▼
MongoDB Atlas
```

---

# Current Project Structure

```
ExamBooster

├── config
│
├── controllers
│   ├── adminController.js
│   ├── authController.js
│   ├── dashboardController.js
│   ├── ProfileController.js
│   ├── questionController.js
│   └── testController.js
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
│   ├── Profile.js
│   ├── question.js
│   └── test.js
│
├── uploads
│
├── docs
│
├── server.js
│
└── package.json
```

---

# Frontend Architecture

```
frontend

src

├── components
│
├── context
│
├── hooks
│
├── layouts
│
├── pages
│
├── services
│
├── styles
│
├── App.jsx
│
└── main.jsx
```

---

# Backend Components

## Server

**File**

server.js

### Responsibilities

- Start Express Server
- Connect MongoDB Atlas
- Register Routes
- Configure Middleware
- Parse JSON Requests
- Enable CORS

---

## Controllers

Business logic layer.

Current Controllers

- Authentication
- Dashboard
- Profile
- Questions
- Mock Tests
- Admin

---

## Models

MongoDB schemas.

Current Models

- User
- Question
- Test

---

## Routes

REST API endpoints.

Current Routes

- Authentication
- Dashboard
- Profile
- Questions
- Mock Tests
- Admin

---

## Middleware

Current Middleware

- JWT Authentication
- Admin Authorization
- CSV Upload Middleware

---

# Database

Database

MongoDB Atlas

Collections

- users
- questions
- tests

---

# Frontend Modules

## Authentication

- Login
- Register
- JWT Authentication

---

## Student Dashboard

- Welcome Card
- Performance Overview
- Practice Shortcut
- Mock Test Shortcut

---

## Practice Module

- Subject Filter
- Difficulty Filter
- Random Questions
- Instant Feedback

---

## Mock Test Module

- Countdown Timer
- Question Palette
- Review Screen
- Auto Submit
- Result Screen

---

## Performance Module

- Statistics
- Charts
- Subject-wise Progress
- Test History

---

## Admin Panel

Current Features

- Dashboard Statistics
- Question Management
- Recent Users
- Add Question
- CSV Upload Backend

Upcoming Features

- Edit Question
- Delete Question
- Search Questions
- User Management
- Mock Test Management

---

# Service Layer

Frontend Services

- api.js
- authService.js
- dashboardService.js
- practiceService.js
- ProfileService.js
- testService.js
- adminService.js

Responsibilities

- API Communication
- Token Handling
- Error Handling

---

# Security Features

- Password Hashing (bcrypt)
- JWT Authentication
- Protected Routes
- Admin Authorization
- Environment Variables
- Role-Based Access Control (RBAC)

---

# Current Technology Stack

## Frontend

- React.js
- React Router
- Bootstrap 5
- Axios
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- CSV Parser

---

# Data Flow

```
User

↓

React Components

↓

Service Layer

↓

REST APIs

↓

Authentication Middleware

↓

Controllers

↓

Mongoose Models

↓

MongoDB Atlas

↓

JSON Response

↓

React UI
```

---

# Future Enhancements

- Question Editing
- Question Deletion
- Advanced Search
- CSV Upload UI
- Mock Test Management
- User Management
- Performance Analytics
- Deployment (Render + Vercel)
- AI-Based Question Recommendation
- AI Performance Analysis
- AI Study Planner

---

# Project Status (After Day 15)

```
Authentication          ✅ Complete

Dashboard               ✅ Complete

Profile                 ✅ Complete

Practice Module         ✅ Complete

Mock Test Module        ✅ Complete

Performance Module      ✅ Complete

Admin Panel             🚧 In Progress

Deployment              ⏳ Pending
```