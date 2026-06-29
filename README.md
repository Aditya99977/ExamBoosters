# 🚀 ExamBooster

> **AI-Powered Government Exam Preparation Platform**

ExamBooster is a full-stack MERN application designed to help aspirants prepare for competitive government examinations through practice questions, mock tests, performance analytics, and future AI-powered learning assistance.

The project is being developed as a **long-term startup initiative** following professional software engineering practices, scalable architecture, and production-ready development standards.

---

# 🌟 Vision

ExamBooster aims to become a modern EdTech platform that enables students to prepare smarter, track their progress, and receive personalized learning guidance using Artificial Intelligence.

Our long-term objective is to build an intelligent learning ecosystem for competitive examinations including IBPS, SBI, SSC, RRB, and other government recruitment exams.

---

# 📌 Current Status

| Item                  | Status            |
| --------------------- | ----------------- |
| Current Version       | Day 8             |
| Backend               | ✅ Completed (MVP) |
| Frontend Foundation   | ✅ Completed       |
| Landing Page          | ✅ Completed       |
| React Integration     | ✅ Completed       |
| Authentication UI     | 🚧 In Progress    |
| AI Features           | ⏳ Planned         |
| Production Deployment | ⏳ Planned         |

---

# ✨ Features Completed

## 🔧 Backend

* Express.js Server
* MongoDB Atlas Integration
* Environment Variables
* Professional MVC Architecture
* RESTful APIs
* Git Version Control

---

## 🔐 Authentication

* User Registration
* User Login
* Password Hashing (bcryptjs)
* JWT Authentication
* Protected Routes
* Role-Based Authorization
* Admin Middleware

---

## 📚 Question Bank

* Add Question API
* Get Questions API
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

---

## 📝 Mock Test Engine

* Start Mock Test
* Submit Mock Test
* Automatic Evaluation
* Score Calculation
* Answer Storage
* Test History

---

## 📊 Student Dashboard

* User Dashboard
* Performance Summary
* Average Score
* Highest Score
* Recent Tests
* Test Details

---

## 👨‍💼 Admin Panel

* Admin Dashboard
* Edit Questions
* Delete Questions
* Bulk CSV Upload
* Subject-wise Analytics

---

## 🎨 Frontend Foundation (Day 8)

* React + Vite
* Bootstrap 5
* React Router
* Axios Configuration
* Shared Layout
* Responsive Navbar
* Hero Section
* Statistics Section
* Features Section
* Supported Exams Section
* Why Choose Us Section
* Call-To-Action Section
* Professional Footer

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* Bootstrap 5
* React Router DOM
* Axios
* React Icons

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
* Git
* GitHub

---

# 📂 Project Structure

```text
ExamBooster
│
├── controllers
├── middleware
├── models
├── routes
├── utils
├── config
├── docs
│
├── frontend
│   ├── public
│   ├── src
│   │
│   ├── assets
│   ├── components
│   ├── context
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── services
│   ├── styles
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── uploads
├── public
├── views
│
├── server.js
├── package.json
├── README.md
└── .gitignore
```

---

# 🚀 Frontend Components

### Layout

* MainLayout

### Components

* Navbar
* Hero
* Stats
* FeatureCard
* Features
* Exams
* WhyChooseUs
* CTA
* Footer

### Pages

* Home
* Login
* Register
* Dashboard
* Admin Dashboard
* Not Found

---

# 📖 Documentation

Inside the **docs/** folder:

* Day1.md
* Day2.md
* Day3.md
* Day4.md
* Day5.md
* Day6.md
* Day7.md
* Day8.md
* API_Documentation.md
* Architecture.md
* ProjectRoadmap.md

---
# 🔐 REST API Endpoints

## Authentication

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | `/api/auth/signup` | Register a new user           |
| POST   | `/api/auth/login`  | User login and JWT generation |

---

## Student Dashboard

| Method | Endpoint         | Description                    |
| ------ | ---------------- | ------------------------------ |
| GET    | `/api/dashboard` | Get logged-in user's dashboard |

---

## Question Bank

| Method | Endpoint                         | Description            |
| ------ | -------------------------------- | ---------------------- |
| POST   | `/api/questions/add`             | Add a new question     |
| GET    | `/api/questions`                 | Get all questions      |
| GET    | `/api/questions/random?limit=10` | Fetch random questions |

---

## Mock Test

| Method | Endpoint                   | Description           |
| ------ | -------------------------- | --------------------- |
| POST   | `/api/test/start`          | Start a new mock test |
| POST   | `/api/test/submit/:testId` | Submit a mock test    |
| GET    | `/api/test/history`        | Get test history      |
| GET    | `/api/test/performance`    | Performance summary   |
| GET    | `/api/test/dashboard`      | Dashboard analytics   |
| GET    | `/api/test/:testId`        | Test details          |

---

## Admin APIs

| Method | Endpoint                  | Description           |
| ------ | ------------------------- | --------------------- |
| GET    | `/api/admin/test`         | Verify admin access   |
| GET    | `/api/admin/dashboard`    | Admin analytics       |
| PUT    | `/api/admin/question/:id` | Update question       |
| DELETE | `/api/admin/question/:id` | Delete question       |
| POST   | `/api/admin/upload/csv`   | Bulk upload questions |

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/Aditya99977/ExamBoosters.git
```

Move into the project directory:

```bash
cd ExamBoosters
```

---

## Backend Installation

Install backend dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```

Server:

```text
http://localhost:5000
```

---

## Frontend Installation

Move to the frontend directory:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

Run the React application:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

*(Vite may automatically use another port, such as 5174, if 5173 is already in use.)*

---

# 📅 Development Timeline

## ✅ Day 1

* Project Initialization
* Express Server Setup
* MongoDB Atlas Connection
* GitHub Repository

---

## ✅ Day 2

* User Registration
* Login API
* Password Hashing
* JWT Authentication
* Protected Routes

---

## ✅ Day 3

* Question Model
* Question APIs
* Subject Filtering
* Difficulty Filtering
* Random Question Generator

---

## ✅ Day 4

* Mock Test Engine
* Automatic Score Calculation
* Answer Storage
* Test Submission

---

## ✅ Day 5

* Test History
* Performance Dashboard
* Dashboard Analytics
* Test Details API

---

## ✅ Day 6

* Admin Dashboard
* Admin Authentication
* Question Editing
* Question Deletion
* CSV Bulk Upload

---

## ✅ Day 7

* MVC Refactoring
* Controllers
* Utilities
* Code Organization
* Clean Architecture

---

## ✅ Day 8

* React + Vite Setup
* Bootstrap Integration
* React Router
* Axios Configuration
* Landing Page
* Hero Section
* Statistics
* Features
* Supported Exams
* Why Choose Us
* Call-To-Action
* Professional Footer

---

# 🚀 Upcoming Milestones

## Milestone 2

### Authentication UI

* Premium Login
* Premium Registration
* JWT Storage
* Form Validation
* Protected Routes
* Session Management

---

## Milestone 3

### Student Dashboard

* Performance Charts
* Study Progress
* Weekly Statistics
* Leaderboard
* Achievements

---

## Milestone 4

### Mock Test Experience

* Real Exam Interface
* Countdown Timer
* Question Palette
* Mark for Review
* Auto Save
* Result Analysis

---

## Milestone 5

### AI Learning Platform

* AI Study Planner
* AI Doubt Solver
* Personalized Recommendations
* AI Question Generator
* Smart Revision Planner

---

## Milestone 6

### Production Deployment

* Domain Setup
* HTTPS
* SEO
* Google Search Console
* Google Analytics
* Production Hosting
* Performance Optimization

---

# 🌐 Deployment Roadmap

The long-term deployment plan includes:

* Production Backend
* Production Frontend
* Custom Domain
* SSL Certificate
* Cloud Database
* Google Search Indexing
* CDN
* Performance Monitoring

---
# 📈 Development Progress

```text
Backend Development        ██████████████████████████ 100%

Frontend Development       ██████████░░░░░░░░░░░░░░░ 35%

UI / UX Design             ████████░░░░░░░░░░░░░░░░░ 30%

Authentication             ██████████████████████████ 100%

Admin Panel                ██████████████████████████ 100%

Question Bank              ██████████████████████████ 100%

Mock Test Engine           ██████████████████████████ 100%

AI Features                ░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Testing                    ██████████░░░░░░░░░░░░░░░░ 30%

Deployment                 ░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Overall Project            ████████████░░░░░░░░░░░░░░ 45%
```

---

# 🏆 Project Highlights

* Full-Stack MERN Architecture
* Professional MVC Backend
* RESTful API Design
* JWT Authentication
* Role-Based Authorization
* CSV Bulk Question Upload
* React + Vite Frontend
* Responsive Landing Page
* Modular Component Architecture
* Bootstrap 5 UI
* React Router Navigation
* Axios API Integration
* Production-Oriented Folder Structure
* Documentation-Driven Development
* Git Version Control
* Scalable Architecture

---

# 📸 Screenshots

> Screenshots will be added as development progresses.

### Landing Page

```
Coming Soon
```

### Login Page

```
Coming Soon
```

### Student Dashboard

```
Coming Soon
```

### Admin Dashboard

```
Coming Soon
```

### Mock Test Interface

```
Coming Soon
```

---

# 🗺️ Long-Term Roadmap

## Phase 1 — Foundation ✅

* Backend APIs
* Authentication
* Question Bank
* Mock Test Engine
* Admin Panel
* MVC Architecture

---

## Phase 2 — Frontend 🚧

* Landing Page
* Authentication UI
* Student Dashboard
* Admin Dashboard
* Mock Test Interface
* Responsive Design

---

## Phase 3 — Advanced Features

* Performance Charts
* Leaderboards
* Achievements
* Notifications
* Study Planner
* Bookmarks
* Notes

---

## Phase 4 — AI Platform

* AI Study Assistant
* AI Doubt Solver
* AI Question Generator
* Personalized Recommendations
* Smart Revision Planner
* Performance Prediction

---

## Phase 5 — Production Launch

* Custom Domain
* Production Deployment
* SSL Certificate
* Google Search Console
* Google Analytics
* SEO Optimization
* Performance Optimization

---

# 🎯 Future Goals

ExamBooster aims to become a complete digital learning ecosystem for government exam aspirants by providing:

* High-quality Practice Questions
* Full-Length Mock Tests
* AI-Based Learning Assistance
* Intelligent Performance Analytics
* Personalized Study Plans
* Career Guidance
* Mobile-Friendly Learning Experience

---

# 🤝 Contributing

Currently, this project is under active development by the author.

Community contributions, suggestions, and feature requests will be welcomed after the first public release.

---

# 👨‍💻 Developer

**Aditya Thakur**

B.Sc. Information Technology Graduate

Graphic Era Deemed to be University

Future MBA (AI & Data Science) Aspirant

India

---

# 🌟 Acknowledgements

Special thanks to the open-source community and the creators of the technologies used in this project.

Major technologies include:

* React
* Vite
* Node.js
* Express.js
* MongoDB
* Bootstrap
* JWT
* Axios
* Git & GitHub

---

# 📄 License

This project is currently developed for educational, portfolio, and startup purposes.

The license may be updated upon the first public production release.

---

# ⭐ Support the Project

If you find this project useful or inspiring:

* ⭐ Star this repository
* 🍴 Fork the repository
* 🐛 Report issues
* 💡 Suggest improvements

Your support helps improve ExamBooster and motivates continued development.

---

# 🚀 Vision Statement

> **"Empowering every government exam aspirant with technology, intelligent learning, and AI-driven preparation."**

ExamBooster is not just another exam preparation website.

It is being built as a scalable, AI-powered EdTech platform focused on delivering a premium learning experience, helping students prepare smarter, track progress effectively, and achieve success in competitive examinations.

The long-term vision is to launch ExamBooster as a production-ready platform serving thousands of learners across India through modern software engineering practices, intelligent analytics, and continuous innovation.
