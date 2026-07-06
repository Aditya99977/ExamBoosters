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
# Admin APIs

---

## 1. Admin Test

### Endpoint

GET /api/admin/test

### Description

Checks whether the authenticated user has administrator access.

### Authentication

Required (Admin)

### Response

```json
{
    "message": "Welcome Admin"
}
```

---

## 2. Admin Dashboard

### Endpoint

GET /api/admin/dashboard

### Description

Returns dashboard statistics for the Admin Panel.

### Authentication

Required (Admin)

### Response

```json
{
    "totalUsers": 4,
    "totalQuestions": 7,
    "totalTests": 8,
    "subjectStats": [
        {
            "_id": "Reasoning",
            "totalQuestions": 3
        }
    ]
}
```

---

## 3. Get All Users

### Endpoint

GET /api/admin/users

### Description

Returns all registered users.

### Authentication

Required (Admin)

### Response

```json
[
    {
        "_id": "...",
        "name": "Aditya",
        "email": "user@example.com",
        "role": "student"
    }
]
```

---

## 4. Get All Questions

### Endpoint

GET /api/admin/questions

### Description

Returns all questions stored in MongoDB.

### Authentication

Required (Admin)

### Response

```json
[
    {
        "_id": "...",
        "question": "What is CPU?",
        "options": [
            "Central Processing Unit",
            "Computer Program Unit",
            "Central Power Unit",
            "Control Processing Unit"
        ],
        "correctAnswer": "Central Processing Unit",
        "subject": "Computer",
        "difficulty": "Easy"
    }
]
```

---

## 5. Update Question

### Endpoint

PUT /api/admin/question/:id

### Description

Updates an existing question.

### Authentication

Required (Admin)

### Request Body

```json
{
    "question": "Updated Question",
    "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    "correctAnswer": "Option A",
    "subject": "Reasoning",
    "difficulty": "Easy"
}
```

### Response

```json
{
    "message": "Question updated successfully"
}
```

---

## 6. Delete Question

### Endpoint

DELETE /api/admin/question/:id

### Description

Deletes a question.

### Authentication

Required (Admin)

### Response

```json
{
    "message": "Question deleted successfully"
}
```

---

## 7. Upload Questions using CSV

### Endpoint

POST /api/admin/upload/csv

### Description

Uploads multiple questions from a CSV file.

### Authentication

Required (Admin)

### Content Type

multipart/form-data

### Field

file

### Response

```json
{
    "message": "50 questions uploaded successfully"
}
```

---

# Updated Question APIs

---

## Add Question

### Endpoint

POST /api/questions/add

### Description

Adds a new question to the database.

### Authentication

Required (Admin)

### Request Body

```json
{
    "question": "What is CPU?",
    "options": [
        "Central Processing Unit",
        "Computer Program Unit",
        "Central Power Unit",
        "Control Processing Unit"
    ],
    "correctAnswer": "Central Processing Unit",
    "subject": "Computer",
    "difficulty": "Easy"
}
```

### Response

```json
{
    "message": "Question added successfully",
    "question": {
        "...": "..."
    }
}
```
