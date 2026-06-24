Day 2 - Authentication System
Objective

Implement a secure authentication system for ExamBooster.

Tasks Completed
User Model

Created:

models/User.js

Fields:

Name
Email
Password
Exam Target
Score
Tests Attempted
User Registration API

Endpoint:

POST /api/auth/signup

Features:

Accepts user information
Checks duplicate users
Hashes passwords using bcrypt
Saves user to MongoDB Atlas
User Login API

Endpoint:

POST /api/auth/login

Features:

Validates email and password
Generates JWT token
Returns authentication token
Password Security

Implemented:

bcryptjs
Password hashing
Password verification
JWT Authentication

Implemented:

JWT token generation
JWT verification
Protected route access
Auth Middleware

Created:

middleware/authMiddleware.js

Responsibilities:

Validate JWT token
Protect private routes
Reject unauthorized users
Protected Dashboard Route

Created:

GET /api/dashboard

Features:

Accessible only by authenticated users
Returns user information
Validates JWT before access
Testing

Successfully tested:

User Registration
User Login
JWT Generation
Dashboard Access
Outcome

ExamBooster now supports secure user authentication and protected routes.