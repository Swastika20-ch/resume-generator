# Resume Generator

A Full Stack Resume Generator built using React, Node.js, Express, MongoDB Atlas, and PDF Export functionality.

## Live Demo

### Frontend

https://resume-generator-gamma-two.vercel.app

### Backend API

https://resume-generator-api-z12v.onrender.com

---

## Overview

Resume Generator is a web application that allows users to create professional resumes with a modern interface, preview them in real-time, save them to MongoDB Atlas, and download them as PDF documents.

---

## Features

* Real-time Resume Preview
* Professional Resume Layout
* Dynamic Experience Sections
* Dynamic Project Sections
* Dynamic Certificate Sections
* Technical Skills Section
* Achievements Section
* MongoDB Database Integration
* Save Resume Functionality
* PDF Download Support
* Responsive Design
* Modern User Interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* CSS3
* html2pdf.js

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Other Libraries

* Axios
* html2pdf.js

---

## Project Structure

```bash
resume-generator/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ResumeForm.jsx
│   │   │   ├── ResumePreview.jsx
│   │   │   └── DownloadButton.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── models/
│   │   └── Resume.js
│   │
│   ├── routes/
│   │   └── resumeRoutes.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Swastika20-ch/resume-generator.git
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
node server.js
```

---

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=5000
```

---

## Database

The project uses MongoDB Atlas to store:

* Personal Information
* Education Details
* Experience Records
* Projects
* Certificates
* Skills
* Achievements

---

## PDF Export

Users can generate and download resumes in PDF format directly from the application.

---

## Future Improvements

* User Authentication
* Multiple Resume Templates
* ATS Resume Checker
* Resume Sharing Links
* Portfolio Integration
* Dark/Light Themes
* Resume Analytics Dashboard

---

## Author
**Swastika Chatterjee**

B.Tech Computer Science and Engineering
KIIT University

GitHub: https://github.com/Swastika20-ch

---

## Support

If you found this project useful, consider giving the repository a star.
