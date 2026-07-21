# Day 29 – Authentication Hardening & Backend Security

**Date:** 20 July 2026

## Overview

Day 29 focused on improving the security, stability, and production readiness of VNAverse in preparation for the beta launch. Instead of introducing new features, the emphasis was on strengthening the authentication system, securing file uploads, and improving backend security while preserving the existing project structure.

---

## Authentication Hardening

### JWT Authentication

* Improved JWT authentication middleware.
* Added proper authorization header validation.
* Improved handling of expired and invalid tokens.
* Standardized authentication error responses.

### Admin Authorization

* Optimized admin middleware.
* Reduced unnecessary database queries using field selection.
* Added future-ready support for account status checks.
* Improved error handling and API response consistency.

### Authentication Controller

* Added email format validation.
* Added strong password validation.
* Added user name validation.
* Prevented email enumeration attacks by using generic login error messages.
* Updated user's last active timestamp after successful login.
* Improved HTTP status codes and response consistency.

### JWT Utility

* Added environment variable validation.
* Made JWT expiration configurable using environment variables.
* Explicitly configured JWT signing algorithm.

### User Model

* Added account status field (`active`, `blocked`).
* Hid sensitive fields using `select: false`.
* Added database indexes for frequently queried fields.
* Added `passwordChangedAt` for future password reset support.
* Improved schema validation.
* Removed unnecessary `__v` field.

---

## Upload Security

### Image Upload Middleware

* Replaced timestamp-based filenames with `crypto.randomUUID()`.
* Improved upload directory handling.
* Added single-file upload restriction.
* Centralized MIME type validation.

### PDF Upload Middleware

* Added automatic upload directory creation.
* Improved filename generation.
* Added single-file upload restriction.
* Improved MIME type validation.

---

## Backend Security

Installed and configured:

* Helmet
* Express Rate Limit
* HPP
* Morgan

Security improvements include:

* Secure HTTP headers.
* Global rate limiting.
* HTTP Parameter Pollution protection.
* Development request logging.
* Improved CORS configuration.
* Improved MongoDB connection handling.
* Updated backend branding from ExamBooster to VNAverse.

---

## Express 5 Compatibility Review

During implementation, `express-mongo-sanitize` was tested but found to be incompatible with Express 5.2.1.

Observed error:

```
Cannot set property query of #<IncomingMessage> which has only a getter
```

Root Cause:

* Express 5 exposes `req.query` as a getter-only property.
* `express-mongo-sanitize` attempts to overwrite `req.query`, causing runtime failures.

Decision:

* Removed `express-mongo-sanitize`.
* Continued using Helmet, HPP, Rate Limiting, and secure validation without downgrading Express.

---

## Email Verification

Investigated Brevo email delivery.

Findings:

* SMTP configuration verified.
* Sender identity verified.
* Authentication logic working correctly.
* Delivery deferred by Gmail due to shared Brevo sending domain reputation.

Decision:

* Email verification postponed until after beta launch.
* Existing authentication architecture preserved for future integration.

---

## Outcome

The authentication and backend security of VNAverse are now significantly stronger and better prepared for beta testing. Instead of adding unnecessary architectural complexity, the focus remained on practical improvements that directly benefit reliability and security.

---

## Day 30 Goals

* Perform complete end-to-end application testing.
* Test every student workflow.
* Test every admin workflow.
* Fix remaining bugs.
* Improve responsiveness where necessary.
* Prepare deployment on Render and Vercel.
* Begin closed beta testing.
