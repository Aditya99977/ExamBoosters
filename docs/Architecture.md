# ExamBooster Architecture

## High-Level Architecture

Client
↓
Express Server
↓
Routes
↓
Middleware
↓
Models
↓
MongoDB Atlas

---

## Folder Structure

ExamBooster

├── models

├── routes

├── middleware

├── docs

├── public

├── views

├── .env

├── server.js

└── package.json

---

## Components

### Server

File:

server.js

Responsibilities:

* Start Express server
* Connect MongoDB Atlas
* Load routes
* Configure middleware

---

### Models

Purpose:

Define MongoDB schemas.

Current Models:

* User

Future Models:

* Question
* Test
* Result

---

### Routes

Purpose:

Handle API requests.

Current Routes:

* Authentication
* Dashboard

Future Routes:

* Questions
* Tests
* Results

---

### Middleware

Purpose:

Handle request processing.

Current Middleware:

* JWT Authentication

Future Middleware:

* Admin Authorization
* Request Validation

---

### Database

Database:

MongoDB Atlas

Collections:

* users

Future Collections:

* questions
* tests
* results

---

## Security Features

* Password Hashing (bcrypt)
* JWT Authentication
* Environment Variables
* Protected Routes

---

## Future Architecture

Frontend (React.js)
↓
REST APIs
↓
Node.js + Express.js
↓
MongoDB Atlas
↓
AI Recommendation Engine
