# NAIRA Multi-Speciality Hospital — Chief Doctor CRM Integration Specification

This document details the exact API contract and configuration required to connect the Chief Doctor Login portal on the Naira Hospital website with the Chief Doctor CRM system.

---

## 1. Architecture Overview

```
[Naira Hospital Public Website]
            │
            ▼
[Chief Doctor Login: /doctor-login]
            │
     POST credentials
            │
            ▼
[CRM Authentication API Endpoint]
     (Configured via VITE_CRM_API_URL)
            │
   ┌────────┴────────┐
   │                 │
[200 OK]         [401/400 Error]
   │                 │
Save Session Token   Display Error Alert
Redirect to CRM      Keep Doctor on Login Page
Dashboard
```

---

## 2. API Contract Required from the CRM Developer

### **A. Login Authentication Endpoint**

- **HTTP Method:** `POST`
- **Content-Type:** `application/json`
- **Default Endpoint:** `/api/doctor/login`
- **Configurable Env Key:** `VITE_CRM_API_URL`

#### **Request Payload (Sent from Frontend):**
```json
{
  "email": "doctor@nairahospital.org",
  "password": "DoctorPasswordHere",
  "timestamp": "2026-11-24T06:00:00.000Z"
}
```

#### **Expected Successful Response (`HTTP 200 OK`):**
```json
{
  "success": true,
  "message": "Chief Doctor authenticated successfully",
  "token": "YOUR_JWT_OR_SESSION_BEARER_TOKEN",
  "doctor": {
    "id": "DOC-01",
    "name": "Dr. R. Sundaram",
    "title": "Chief Medical Director & Senior Cardiologist",
    "department": "Cardiology & Clinical Operations",
    "email": "doctor@nairahospital.org",
    "role": "CHIEF_DOCTOR",
    "hospital": "NAIRA Multi-Speciality Hospital"
  },
  "crmDashboardUrl": "/doctor-crm"
}
```

#### **Expected Failure Response (`HTTP 401 Unauthorized` or `HTTP 400 Bad Request`):**
```json
{
  "success": false,
  "error": "Invalid Chief Doctor credentials. Please verify your email and password."
}
```

---

### **B. Token Verification / Session Check Endpoint (Optional but Recommended)**

- **HTTP Method:** `GET`
- **Header:** `Authorization: Bearer <YOUR_TOKEN>`
- **Endpoint:** `/api/doctor/verify`

#### **Expected Response:**
```json
{
  "success": true,
  "authenticated": true,
  "doctor": {
    "name": "Dr. R. Sundaram",
    "role": "CHIEF_DOCTOR"
  }
}
```

---

## 3. Details Required from the CRM Developer

To complete end-to-end production deployment with your friend's CRM, request the following 4 parameters from them:

1. **CRM Login Endpoint URL:**
   - The full API URL where credentials should be posted (e.g. `https://crm-api.yourdomain.com/v1/auth/login`).
   - Place this URL in `frontend/.env` under `VITE_CRM_API_URL`.

2. **CORS Configuration:**
   - Ensure their CRM API allows Cross-Origin requests (`CORS`) from your hospital domain:
     - `http://localhost:5173` (Development)
     - `https://your-hospital-domain.com` (Production)

3. **Response Payload Keys:**
   - Confirm if their API returns `token` or `accessToken`. The frontend handles both automatically.
   - Confirm if doctor details are under `doctor` or `user`. The frontend handles both.

4. **CRM Dashboard Location:**
   - If their CRM dashboard is on an **external URL** (e.g., `https://crm.yourdomain.com/dashboard`), provide it under `VITE_CRM_EXTERNAL_URL`.
   - If their CRM dashboard is **integrated into this project**, leave `VITE_CRM_EXTERNAL_URL` blank to use the built-in protected route `/doctor-crm`.

---

## 4. Security Guarantees Implemented

1. **Zero Password Storage:** Passwords are never stored in `localStorage`, `sessionStorage`, or cookies. Only auth tokens are preserved.
2. **Protected Route:** The `/doctor-crm` route cannot be accessed without an active bearer session token. Unauthorized attempts are automatically redirected to `/doctor-login`.
3. **Show/Hide Password:** Doctors can toggle visibility while typing without exposing credentials in plain text by default.
4. **Remember Me:** Only preserves email address in local storage if explicitly selected by the user.
