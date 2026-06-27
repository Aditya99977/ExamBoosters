# Day 6 - Admin Panel & Bulk CSV Upload

## Date
27 June 2026

## Objectives

- Implement Admin Role
- Create Admin Middleware
- Build Admin Dashboard
- Edit Question API
- Delete Question API
- Bulk CSV Upload

---

## Features Completed

### Admin Authentication

- Admin role verification
- Protected admin routes
- Role-based access control

---

### Question Management

- Edit existing questions
- Delete questions
- Validation and error handling

---

### Admin Dashboard

Dashboard API provides:

- Total Users
- Total Questions
- Total Tests
- Subject-wise statistics

---

### Bulk CSV Upload

Implemented CSV upload using:

- Multer
- csv-parser
- MongoDB insertMany()

Workflow:

CSV File
→ Upload
→ Parse
→ Validate
→ Store in MongoDB

Successfully imported questions using CSV.

---

## APIs Added

GET /api/admin/test

PUT /api/admin/question/:id

DELETE /api/admin/question/:id

GET /api/admin/dashboard

POST /api/admin/upload/csv

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- csv-parser

---

## Challenges Faced

- JWT token debugging
- CSV formatting issue
- Windows file extension confusion
- curl file upload testing
- MongoDB validation errors

---

## Learning Outcomes

- Role-Based Authentication
- File Uploads using Multer
- CSV Parsing
- Bulk Database Operations
- API Debugging
- Reading Stack Traces

---

## Status

Day 6 Successfully Completed

Backend Progress: ~65%