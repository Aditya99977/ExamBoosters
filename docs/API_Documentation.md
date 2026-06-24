# API Documentation

## Base URL

http://localhost:5000

---

# Authentication APIs

## User Registration

Endpoint:

POST /api/auth/signup

Request Body:

```json
{
  "name": "Aditya",
  "email": "aditya@gmail.com",
  "password": "123456",
  "examTarget": "IBPS"
}
```

Success Response:

```json
{
  "message": "User registered successfully"
}
```

---

## User Login

Endpoint:

POST /api/auth/login

Request Body:

```json
{
  "email": "aditya@gmail.com",
  "password": "123456"
}
```

Success Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

# Dashboard API

## Get User Dashboard

Endpoint:

GET /api/dashboard

Headers:

Authorization: JWT_TOKEN

Success Response:

```json
{
  "name": "Aditya",
  "email": "aditya@gmail.com",
  "examTarget": "IBPS",
  "score": 0,
  "testsAttempted": 0
}
```
