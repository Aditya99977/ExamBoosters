# 🚀 ExamBooster

> **AI-Powered Government Exam Preparation Platform**

ExamBooster is a full-stack MERN application designed to help aspirants prepare for competitive government examinations through practice questions, mock tests, performance analytics, personalized learning, and future AI-powered study assistance.

The platform is being developed as a **long-term startup initiative** following modern software engineering practices, scalable architecture, clean code principles, and production-ready development standards.

---

# 🌟 Vision

ExamBooster aims to become a modern AI-powered EdTech platform that enables students to prepare smarter, track their performance, identify weak areas, and receive personalized learning guidance.

The long-term vision is to build a complete digital learning ecosystem for government examinations including:

- IBPS Clerk
- IBPS PO
- SBI Clerk
- SBI PO
- SSC CGL
- SSC CHSL
- RRB NTPC
- RRB Group D
- Other Government Recruitment Exams

---

# 📌 Current Status

| Item | Status |
|------|--------|
| **Current Version** | **Day 9** |
| Backend Development | ✅ Completed |
| MVC Architecture | ✅ Completed |
| Authentication Backend | ✅ Completed |
| React Frontend | ✅ Completed |
| Landing Page | ✅ Completed |
| Authentication Module | ✅ Completed |
| Profile Module | ✅ Completed |
| Student Dashboard | 🚧 In Development |
| Mock Test UI | ⏳ Planned |
| AI Features | ⏳ Planned |
| Production Deployment | ⏳ Planned |

---

# ✨ Features Completed

## 🔧 Backend

- Express.js Server
- MongoDB Atlas Integration
- Environment Variables
- Professional MVC Architecture
- RESTful APIs
- Git Version Control
- Error Handling
- Modular Folder Structure

---

## 🔐 Authentication

### Backend

- User Registration API
- User Login API
- Password Hashing (bcryptjs)
- JWT Authentication
- Protected Routes
- Role-Based Authorization
- Admin Middleware
- JWT Verification Middleware

### Frontend

- Professional Login Page
- Professional Registration Page
- Authentication Layout
- Authentication Card
- React Hook Form
- Zod Validation
- React Toastify Notifications
- JWT Token Storage
- React Context Authentication
- Protected Routes
- Logout Functionality
- Dynamic Navbar
- Dynamic User Profile
- Axios API Integration
- Session Management

---

## 📚 Question Bank

- Add Question API
- Get Questions API
- Subject Filtering
- Difficulty Filtering
- Random Question Generator
- Bulk CSV Upload
- Admin Question Management

---

## 📝 Mock Test Engine

- Start Mock Test
- Submit Mock Test
- Automatic Evaluation
- Score Calculation
- Answer Storage
- Test History
- Performance Summary

---

## 📊 Student Analytics

- User Dashboard API
- Performance Summary
- Highest Score
- Average Score
- Recent Tests
- Test Details
- User Profile

---

## 👨‍💼 Admin Panel

- Admin Authentication
- Admin Dashboard
- Edit Questions
- Delete Questions
- Bulk CSV Upload
- Subject-wise Analytics
- User Statistics

---

## 🎨 Frontend

### Landing Page

- Responsive Navbar
- Hero Section
- Statistics Section
- Features Section
- Supported Exams
- Why Choose Us
- Call-to-Action Section
- Professional Footer

### Authentication

- Login Page
- Registration Page
- Profile Page
- Protected Routing
- Loading Spinner
- Dynamic Navigation

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
- Context API

---

## Backend

- Node.js
- Express.js

---

## Database

- MongoDB Atlas
- Mongoose

---

## Authentication

- JWT (JSON Web Token)
- bcryptjs

---

## File Upload

- Multer
- csv-parser

---

## Development Tools

- VS Code
- Thunder Client
- curl
- Git
- GitHub
- Postman
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
├── middleware
│   ├── adminMiddleware.js
│   ├── authMiddleware.js
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
├── utils
│   ├── generateToken.js
│   └── responseHandler.js
│
├── uploads
│
├── docs
│   ├── Day1.md
│   ├── Day2.md
│   ├── Day3.md
│   ├── Day4.md
│   ├── Day5.md
│   ├── Day6.md
│   ├── Day7.md
│   ├── Day8.md
│   ├── Day9.md
│   ├── API_Documentation.md
│   ├── Architecture.md
│   └── ProjectRoadmap.md
│
├── frontend
│   │
│   ├── public
│   │
│   ├── src
│   │
│   ├── assets
│   │
│   ├── components
│   │   ├── AuthButton.jsx
│   │   ├── AuthCard.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── FormInput.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── PasswordInput.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Stats.jsx
│   │   └── WhyChooseUs.jsx
│   │
│   ├── context
│   │   └── AuthContext.jsx
│   │
│   ├── layouts
│   │   ├── AuthLayout.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── dashboardService.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# 🧩 Frontend Architecture

## Layouts

- MainLayout
- AuthLayout

---

## Components

- Navbar
- Hero
- Stats
- FeatureCard
- Footer
- Loader
- AuthCard
- AuthButton
- FormInput
- PasswordInput
- ProtectedRoute
- WhyChooseUs

---

## Context API

- AuthContext

---

## Services

- api.js
- authService.js
- dashboardService.js

---

## Pages

- Home
- Login
- Register
- Dashboard
- Profile
- Admin Dashboard
- Forgot Password
- Not Found

---

# 📖 Documentation

Complete project documentation is available inside the **docs/** directory.

Documentation includes:

- Day1.md
- Day2.md
- Day3.md
- Day4.md
- Day5.md
- Day6.md
- Day7.md
- Day8.md
- Day9.md
- API Documentation
- Architecture
- Project Roadmap

Each development day is documented separately with completed features, implementation details, challenges, and future planning.

---

# 🔐 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register New User |
| POST | `/api/auth/login` | User Login |

---

## Student Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard` | User Dashboard |

---

## Question Bank

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/questions/add` | Add Question |
| GET | `/api/questions` | Get All Questions |
| GET | `/api/questions/random?limit=10` | Random Questions |

---

## Mock Test

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/test/start` | Start Test |
| POST | `/api/test/submit/:testId` | Submit Test |
| GET | `/api/test/history` | Test History |
| GET | `/api/test/performance` | Performance Summary |
| GET | `/api/test/dashboard` | Dashboard Analytics |
| GET | `/api/test/:testId` | Test Details |

---

## Admin APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/test` | Verify Admin |
| GET | `/api/admin/dashboard` | Admin Dashboard |
| PUT | `/api/admin/question/:id` | Update Question |
| DELETE | `/api/admin/question/:id` | Delete Question |
| POST | `/api/admin/upload/csv` | Bulk CSV Upload |

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/Aditya99977/ExamBoosters.git
```

Move into the project folder:

```bash
cd ExamBoosters
```

---

# 🔧 Backend Setup

Install dependencies:

```bash
npm install
```

Create a **.env** file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

Backend Server:

```text
http://localhost:5000
```

---

# 🎨 Frontend Setup

Move into frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run React application:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

*(If port 5173 is occupied, Vite will automatically use another available port such as 5174.)*

---

# 🧪 Testing

Backend APIs can be tested using:

- Thunder Client
- Postman
- curl

Frontend testing currently includes:

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Dynamic Profile
- API Integration

More testing modules will be added during future development phases.
---

# 📅 Development Timeline

## ✅ Day 1 — Project Foundation

- Project Initialization
- Express.js Server Setup
- MongoDB Atlas Connection
- Environment Configuration
- GitHub Repository Setup

---

## ✅ Day 2 — Authentication Backend

- User Registration API
- User Login API
- Password Hashing (bcryptjs)
- JWT Authentication
- Protected Routes

---

## ✅ Day 3 — Question Bank

- Question Model
- Add Question API
- Get Questions API
- Subject Filtering
- Difficulty Filtering
- Random Question Generator

---

## ✅ Day 4 — Mock Test Engine

- Start Mock Test
- Submit Mock Test
- Automatic Evaluation
- Answer Storage
- Score Calculation

---

## ✅ Day 5 — Student Analytics

- Test History
- Performance Summary
- Dashboard Analytics
- Test Details
- User Statistics

---

## ✅ Day 6 — Admin Panel

- Admin Authentication
- Admin Dashboard
- Edit Questions
- Delete Questions
- Bulk CSV Upload
- Subject-wise Analytics

---

## ✅ Day 7 — MVC Refactoring

- Controller Layer
- Utility Functions
- Professional Folder Structure
- Business Logic Separation
- Clean Architecture

---

## ✅ Day 8 — Frontend Foundation

- React + Vite Setup
- Bootstrap Integration
- React Router
- Axios Configuration
- Landing Page
- Hero Section
- Statistics Section
- Features Section
- Supported Exams
- Why Choose Us
- Call-To-Action
- Footer

---

## ✅ Day 9 — Authentication Module

- Login Page
- Registration Page
- Authentication Layout
- React Hook Form
- Zod Validation
- Toast Notifications
- JWT Storage
- Auth Context
- Protected Routes
- Dynamic Navbar
- Logout
- Profile Page
- Dynamic Profile Data
- Axios Interceptors
- Backend Integration
- CORS Configuration
- JWT Middleware Fix

---

# 🚀 Upcoming Development

## 🎯 Day 10

- Premium Student Dashboard
- Dashboard Cards
- Subject Progress
- Recent Tests
- Quick Actions
- Study Statistics
- Dashboard Widgets

---

## 🚀 Version 1.0

- Student Dashboard
- Admin Dashboard UI
- Mock Test Interface
- Question Interface
- Performance Analytics
- User Settings

---

## 🚀 Version 2.0

- Performance Charts
- Leaderboards
- Achievements
- Bookmarks
- Study Notes
- Notifications
- Dark Mode
- Mobile Optimization

---

## 🤖 Version 3.0

- AI Study Planner
- AI Question Generator
- AI Performance Analysis
- AI Doubt Solver
- Smart Revision Planner
- Personalized Recommendations

---

## 🌍 Version 4.0

- Production Deployment
- Custom Domain
- HTTPS
- Google Search Console
- Google Analytics
- SEO Optimization
- Performance Monitoring

---

# 📈 Development Progress

```text
Backend Development        ██████████████████████████ 100%

Frontend Development       ███████████████░░░░░░░░░░ 60%

Authentication             ██████████████████████████ 100%

Landing Page               ██████████████████████████ 100%

Profile Module             ██████████████████████████ 100%

Student Dashboard          ███░░░░░░░░░░░░░░░░░░░░░░ 15%

Admin Dashboard UI         ░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Mock Test UI               ░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

AI Features                ░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Testing                    ███████████░░░░░░░░░░░░░░ 35%

Deployment                 ░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Overall Project            ███████████████░░░░░░░░░░ 60%
```

---

# 🏆 Project Highlights

- Full-Stack MERN Architecture
- Professional MVC Backend
- RESTful API Design
- JWT Authentication
- Role-Based Authorization
- React Context API
- Protected React Routes
- Dynamic User Profile
- Responsive Landing Page
- Modern Authentication UI
- Modular Component Architecture
- Bootstrap 5 UI
- Axios API Integration
- CSV Bulk Question Upload
- Professional Folder Structure
- Documentation-Driven Development
- Git Version Control
- Scalable Project Architecture

---

# 📸 Screenshots

> Screenshots will be updated after completion of major UI modules.

## Landing Page

Coming Soon

---

## Login Page

Coming Soon

---

## Registration Page

Coming Soon

---

## Student Dashboard

Coming Soon

---

## Admin Dashboard

Coming Soon

---

## Mock Test Interface

Coming Soon

---

# 🌐 Deployment Roadmap

Future production deployment will include:

- Backend Deployment
- Frontend Deployment
- Cloud MongoDB
- Custom Domain
- HTTPS
- Google Search Console
- Google Analytics
- SEO
- CDN
- Performance Monitoring

---

# 🗺️ Long-Term Roadmap

## ✅ Phase 1 — Backend Foundation

- REST APIs
- Authentication
- Question Bank
- Mock Test Engine
- Admin Panel
- MVC Architecture

---

## 🚧 Phase 2 — Frontend

- Landing Page
- Authentication
- Student Dashboard
- Admin Dashboard
- Mock Test Interface
- Responsive Design

---

## 🔮 Phase 3 — Advanced Features

- Performance Charts
- Leaderboards
- Achievements
- Notifications
- Bookmarks
- Study Notes

---

## 🤖 Phase 4 — AI Platform

- AI Study Assistant
- AI Doubt Solver
- AI Question Generator
- Smart Revision
- Performance Prediction
- Personalized Learning

---

## 🚀 Phase 5 — Production Launch

- Cloud Deployment
- Custom Domain
- HTTPS
- SEO
- Analytics
- Performance Optimization

---

# 🎯 Future Goals

ExamBooster aims to become a complete digital learning ecosystem by providing:

- High-Quality Practice Questions
- Full-Length Mock Tests
- Performance Analytics
- AI-Based Study Planning
- Intelligent Recommendations
- Personalized Learning
- Career Guidance
- Mobile-Friendly Learning

---

# 🤝 Contributing

Currently, ExamBooster is under active development.

Community contributions, feature requests, bug reports, and suggestions will be welcomed after the first stable public release.

---

# 👨‍💻 Developer

**Aditya Thakur**

B.Sc. Information Technology Graduate

Graphic Era Deemed to be University

Future MBA (AI & Data Science) Aspirant

India

---

# 🙏 Acknowledgements

Special thanks to the open-source community and the creators of:

- React
- Vite
- Node.js
- Express.js
- MongoDB
- Bootstrap
- JWT
- Axios
- Git & GitHub

---

# 📄 License

This project is currently being developed for educational, portfolio, and startup purposes.

The license may be updated upon the first public production release.

---

# ⭐ Support

If you like this project:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐛 Report bugs
- 💡 Suggest improvements
- 🚀 Share with others

Your support motivates continued development.

---

# 🚀 Vision Statement

> **"Empowering every government exam aspirant with technology, intelligent learning, and AI-driven preparation."**

ExamBooster is more than just another government exam website.

It is being developed as a scalable, production-ready EdTech platform that combines modern software engineering with Artificial Intelligence to help students prepare smarter, track their progress effectively, and achieve success in competitive examinations.

The long-term vision is to launch ExamBooster as a nationwide learning platform serving thousands of aspirants through secure, intelligent, and personalized digital education.