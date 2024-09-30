# JobForge

## Overview

**JobForge** is a full-stack job portal web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users and recruiters to create profiles, post and apply for jobs, upload resumes, and manage the application process with real-time status updates. 

---

## Features

- User and recruiter authentication using JWT.
- Users can create profiles, search for jobs, apply for them, and upload resumes.
- Recruiters can post jobs, review applicants, view resumes, and change applicant status (Accepted/Rejected).
- Job filtering functionality based on various criteria.
- Role-based access control for user and admin routes.
- Used **Redux** for state management and **Shadcn UI** for the frontend.

---

## Tech Stack

- **Frontend**: React.js with Redux, TailwindCSS, Shadcn UI.
- **Backend**: Node.js, Express.js, Zod for validation.
- **Database**: MongoDB with Mongoose.
- **Authentication**: JWT (JSON Web Tokens) for secure authentication.

---

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/jobforge.git
cd jobforge
```
1.Install dependencies:

```bash
cd backend
npm install
cd ../frontend
npm install
```
3. Set up the environment variables:
Create a .env file in the root directory and add the following variables:

```bash
DATABASE=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_API_KEY=your_email_service_key (for future email notification feature)
```
4. Run the application:

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```


