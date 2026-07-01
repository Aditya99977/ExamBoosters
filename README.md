# 🚀 ExamBooster

> **A Modern MERN-Based Government Exam Preparation Platform**

ExamBooster is a full-stack MERN application designed to help students prepare for competitive government examinations through practice questions, mock tests, performance analytics, and personalized learning.

The project is being developed using modern software engineering practices with a scalable architecture, secure authentication, modular components, and production-ready development standards.

---

## 🌟 Project Vision

The goal of ExamBooster is to build a centralized learning platform where aspirants can:

- Practice exam-specific questions
- Take full-length mock tests
- Analyze their performance
- Track study progress
- Receive AI-powered study recommendations (planned)

The long-term vision is to evolve ExamBooster into a complete EdTech platform for government exam preparation.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Role-Based Authorization
- Persistent Login Session
- Logout Functionality

---

## 👤 User Profile

- View Profile
- Edit Profile
- Update Target Exam
- Protected Profile Routes

---

## 📚 Question Bank

- Add Questions
- View Questions
- Subject Filtering
- Difficulty Filtering
- Random Question Generator
- Bulk CSV Upload (Admin)

---

## 📝 Mock Test System

- Start Mock Test
- Submit Test
- Automatic Score Calculation
- Accuracy Calculation
- Test History
- Performance Summary

---

## 📊 Dashboard

- Student Dashboard
- Welcome Section
- Statistics Cards
- Subject Progress
- Performance Chart
- Recent Mock Tests
- Quick Actions
- Backend Dashboard API

---

## 👨‍💼 Admin Module

- Admin Dashboard
- Manage Questions
- Edit Questions
- Delete Questions
- Bulk CSV Upload
- Analytics APIs

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite
- Bootstrap 5
- React Router DOM
- Axios
- React Icons
- React Hook Form
- Zod
- React Toastify
- Chart.js
- Context API

---

## Backend

- Node.js
- Express.js
- MVC Architecture
- REST APIs

---

## Database

- MongoDB Atlas
- Mongoose

---

## Authentication

- JWT
- bcryptjs

---

## Development Tools

- Git
- GitHub
- VS Code
- Postman
- Thunder Client

---

# 📈 Current Development Status

| Module | Status |
|---------|--------|
| Authentication | ✅ Completed |
| Landing Page | ✅ Completed |
| Student Dashboard UI | 🚧 In Progress |
| Admin Dashboard | 🚧 In Progress |
| Profile Management | 🚧 In Progress |
| Mock Test Engine | ✅ Completed |
| Performance Analytics | 🚧 In Progress |
| AI Features | ⏳ Planned |
| Deployment | ⏳ Planned |

---

# 🚀 Key Highlights

- Full Stack MERN Application
- Professional MVC Backend
- JWT Authentication
- Role-Based Access Control
- Responsive User Interface
- Dashboard Analytics
- RESTful APIs
- Modular Architecture
- Clean Folder Structure
- Scalable Project Design

---
# 📂 Project Architecture

ExamBooster follows a scalable full-stack architecture based on the **MERN Stack**.

```
                React + Vite
                      │
                      ▼
             Express REST APIs
                      │
                      ▼
             Business Logic (MVC)
                      │
                      ▼
             MongoDB Atlas Database
```

### Architecture Highlights

- Modular MVC Backend
- RESTful API Design
- JWT Authentication
- Protected Routes
- Role-Based Authorization
- Reusable React Components
- Context API for Authentication
- Axios Interceptors
- Scalable Folder Structure

---

# 📁 Project Structure

```text
ExamBooster
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   ├── utils
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── docs
│   ├── Day1.md
│   ├── Day2.md
│   ├── ...
│   ├── API_Documentation.md
│   ├── Architecture.md
│   └── ProjectRoadmap.md
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Aditya99977/ExamBoosters.git
```

Move into the project folder

```bash
cd ExamBoosters
```

---

# 🔧 Backend Setup

Move into backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the backend

```bash
npm run dev
```

Backend URL

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

Move into frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the frontend

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🔌 REST API Overview

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/signup` |
| POST | `/api/auth/login` |

---

## Dashboard

| Method | Endpoint |
|---------|----------|
| GET | `/api/dashboard` |

---

## Profile

| Method | Endpoint |
|---------|----------|
| GET | `/api/profile` |
| PUT | `/api/profile` |

---

## Question Bank

| Method | Endpoint |
|---------|----------|
| POST | `/api/questions/add` |
| GET | `/api/questions` |
| GET | `/api/questions/random` |

---

## Mock Test

| Method | Endpoint |
|---------|----------|
| POST | `/api/test/start` |
| POST | `/api/test/submit/:testId` |
| GET | `/api/test/history` |
| GET | `/api/test/performance` |
| GET | `/api/test/:testId` |

---

## Admin

| Method | Endpoint |
|---------|----------|
| GET | `/api/admin/dashboard` |
| PUT | `/api/admin/question/:id` |
| DELETE | `/api/admin/question/:id` |
| POST | `/api/admin/upload/csv` |

---

# 📚 Documentation

Detailed documentation is available in the **docs/** folder.

Included documents:

- Development Log (Day 1 onwards)
- API Documentation
- Project Architecture
- Project Roadmap

These documents provide implementation details, design decisions, and future development plans.

---
# 📸 Screenshots

> Screenshots will be updated as development progresses.

### 🏠 Landing Page

Coming Soon

---

### 🔐 Login Page

Coming Soon

---

### 📝 Registration Page

Coming Soon

---

### 📊 Student Dashboard

Coming Soon

---

### 👤 Profile Page

Coming Soon

---

### 👨‍💼 Admin Dashboard

Coming Soon

---

# 🗺️ Development Roadmap

## ✅ Phase 1 — Backend Foundation

- User Authentication
- JWT Authorization
- Question Bank APIs
- Mock Test Engine
- Admin Module
- MVC Architecture

---

## 🚧 Phase 2 — Frontend

- Responsive Landing Page
- Authentication UI
- Student Dashboard
- Admin Dashboard
- Profile Management
- Performance Analytics

---

## 🔜 Phase 3 — Advanced Features

- Live Dashboard Analytics
- Subject-wise Performance
- Leaderboard
- Bookmarks
- Notifications
- Dark Mode
- Mobile Optimization

---

## 🤖 Phase 4 — AI Features

- AI Study Planner
- AI Question Generator
- AI Performance Analysis
- AI Doubt Solver
- Smart Revision Planner
- Personalized Learning Recommendations

---

## 🌍 Phase 5 — Production Launch

- Backend Deployment
- Frontend Deployment
- Custom Domain
- HTTPS
- Email Verification
- Forgot Password
- Reset Password
- SEO Optimization
- Google Analytics

---

# 📊 Current Progress

| Module | Progress |
|---------|----------|
| Backend Development | ████████████████████ 100% |
| Authentication | ████████████████████ 100% |
| Landing Page | ████████████████████ 100% |
| Profile Management | █████████████████░░░ 80% |
| Student Dashboard | ███████████████░░░░░ 75% |
| Admin Dashboard | ██████████░░░░░░░░░░ 50% |
| Mock Test UI | ███████░░░░░░░░░░░░░ 35% |
| AI Features | ░░░░░░░░░░░░░░░░░░░░ 0% |
| Deployment | ░░░░░░░░░░░░░░░░░░░░ 0% |

### Overall Project Completion

```text
████████████████░░░░ 82%
```

---

# 🚀 Upcoming Features

- Live Dashboard Integration
- Email Verification
- Forgot Password
- Reset Password
- AI Study Assistant
- AI Mock Test Analysis
- Leaderboard
- Study Planner
- Daily Goals
- Achievement System
- Admin Analytics
- Production Deployment

---

# 🤝 Contributing

ExamBooster is currently under active development.

Feedback, suggestions, and constructive discussions are always welcome. Community contributions will be welcomed after the first stable public release.

---

# 👨‍💻 Developer

**Aditya Thakur**

B.Sc. Information Technology Graduate  
Graphic Era Deemed to be University

**Tech Interests**

- Full Stack Web Development
- MERN Stack
- Artificial Intelligence
- Data Science
- Software Engineering

GitHub:
https://github.com/Aditya99977

LinkedIn:
https://www.linkedin.com/in/aditya-thakur-67745141a/

---

# 📄 License

This project is currently being developed for educational, portfolio, and startup purposes.

A production license will be added before the first public release.

---

# ⭐ Support

If you found this project interesting, consider:

- ⭐ Starring the repository
- 🍴 Forking the project
- 🐞 Reporting issues
- 💡 Suggesting improvements

Your support helps improve the project and motivates continued development.

---

# 🎯 Vision

> **"Helping every government exam aspirant prepare smarter through technology."**

ExamBooster is being built as a modern learning platform that combines structured preparation, performance tracking, and future AI-powered assistance into a single ecosystem.

The goal is to provide students with a reliable platform that supports continuous learning, measurable progress, and personalized preparation for competitive government examinations.

---

## 🙏 Acknowledgements

Special thanks to the open-source community and the teams behind:

- React
- Vite
- Node.js
- Express.js
- MongoDB
- Bootstrap
- Chart.js
- Axios
- JWT
- Git & GitHub