# Resume Generator

A Full Stack Resume Generator built using React, Node.js, Express, MongoDB and PDF Export functionality.

## Features

- Create professional resumes instantly
- Live resume preview
- Multiple Experience sections
- Multiple Project sections
- Multiple Certificate sections
- Save resume data to MongoDB Atlas
- Download resume as PDF
- Modern Overleaf-inspired UI
- Responsive Design

---

## Tech Stack

### Frontend
- React.js
- Vite
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Additional Libraries
- Axios
- html2pdf.js

---

## Project Structure

```bash
resume-generator/
│
├── client/
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
│   └── package.json
│
└── README.md
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

Create a .env file inside server folder.

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

---

## Screenshots

- Resume Builder Interface
- Live Resume Preview
- PDF Export Feature

---

## Future Improvements

- User Authentication
- Multiple Resume Templates
- ATS Score Checker
- Resume Sharing Link
- Resume Analytics
- Portfolio Integration

---

## Author

**Swastika Chatterjee**

Computer Science Engineering Student  
KIIT University

GitHub:
https://github.com/Swastika20-ch

LinkedIn:
https://www.linkedin.com

---
