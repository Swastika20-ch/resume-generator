import { useState } from "react";
import "./App.css";

import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [resumeData, setResumeData] = useState({
    // Personal
    name: "",
    email: "",
    phone: "",
    address: "",

    linkedin: "",
    github: "",

    objective: "",

    // Education
    degree: "",
    institution: "",
    year: "",

    // Experience
    experiences: [
      {
        company: "",
        role: "",
        duration: "",
        description: "",
      },
    ],

    // Projects
    projects: [
      {
        name: "",
        technologies: "",
        description: "",
      },
    ],

    // Certificates
    certificates: [
      {
        title: "",
        issuer: "",
      },
    ],

    // Skills
    skills: "",

    // Achievements
    achievements: "",
  });

  return (
    <div className="app-container">
      <h1 className="main-title">
        Resume Generator
      </h1>

      <div className="content-container">

        <div className="left-panel">
          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        </div>

        <div className="right-panel">

          <DownloadButton />

          <ResumePreview
            resumeData={resumeData}
          />

        </div>

      </div>
    </div>
  );
}

export default App;