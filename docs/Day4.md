# Day 4 - Mock Test Engine

## Objective

Develop the backend workflow for conducting mock tests, including test creation, submission, score calculation, and result storage.

---

## Features Implemented

### Test Model

Created a dedicated Test model to store:

* User information
* Assigned questions
* User answers
* Score
* Total questions
* Submission status
* Submission time

---

### Start Test API

**Endpoint**

POST /api/test/start

**Features**

* Authenticated users can start a new mock test.
* Random questions are fetched from MongoDB.
* A new test record is created.
* Returns the generated test along with its questions.

---

### Submit Test API

**Endpoint**

POST /api/test/submit/:testId

**Features**

* Accepts user answers.
* Compares submitted answers with the correct answers.
* Calculates the final score.
* Stores submitted answers.
* Marks the test as submitted.
* Saves the final result.

---

### Score Calculation

Implemented automatic score calculation by comparing each submitted answer with the corresponding correct answer stored in the Question collection.

---

### Database Operations

Successfully implemented:

* Test creation
* Question assignment
* Answer storage
* Score storage
* Result persistence

---

## APIs Implemented

* POST /api/test/start
* POST /api/test/submit/:testId

---

## Testing

Successfully tested:

* Mock Test Creation
* Random Question Assignment
* Test Submission
* Automatic Score Calculation
* Result Storage

Example Result:

Score: 6/6

---

## Outcome

ExamBooster now supports the complete backend workflow for mock tests. Authenticated users can start a test, answer questions, submit the test, and receive an automatically calculated score, with results stored in MongoDB for future analysis.
