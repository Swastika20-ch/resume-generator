import axios from "axios";

function ResumeForm({ resumeData, setResumeData }) {

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveResume = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/resume/save",
        resumeData
      );

      console.log(response.data);

      alert("✅ Resume Saved Successfully!");
    } catch (error) {
      console.error(error);

      alert("❌ Error Saving Resume");
    }
  };

  // EXPERIENCE

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experiences: [
        ...resumeData.experiences,
        {
          company: "",
          role: "",
          duration: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index) => {
    const updated = [...resumeData.experiences];

    updated.splice(index, 1);

    setResumeData({
      ...resumeData,
      experiences: updated,
    });
  };

  const handleExperienceChange = (
    index,
    field,
    value
  ) => {
    const updated = [...resumeData.experiences];

    updated[index][field] = value;

    setResumeData({
      ...resumeData,
      experiences: updated,
    });
  };

  // PROJECTS

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          name: "",
          technologies: "",
          description: "",
        },
      ],
    });
  };

  const removeProject = (index) => {
    const updated = [...resumeData.projects];

    updated.splice(index, 1);

    setResumeData({
      ...resumeData,
      projects: updated,
    });
  };

  const handleProjectChange = (
    index,
    field,
    value
  ) => {
    const updated = [...resumeData.projects];

    updated[index][field] = value;

    setResumeData({
      ...resumeData,
      projects: updated,
    });
  };

  // CERTIFICATES

  const addCertificate = () => {
    setResumeData({
      ...resumeData,
      certificates: [
        ...resumeData.certificates,
        {
          title: "",
          issuer: "",
        },
      ],
    });
  };

  const removeCertificate = (index) => {
    const updated = [...resumeData.certificates];

    updated.splice(index, 1);

    setResumeData({
      ...resumeData,
      certificates: updated,
    });
  };

  const handleCertificateChange = (
    index,
    field,
    value
  ) => {
    const updated = [...resumeData.certificates];

    updated[index][field] = value;

    setResumeData({
      ...resumeData,
      certificates: updated,
    });
  };

  return (
    <div className="form-card">

      <h2>Resume Builder</h2>

      {/* PERSONAL DETAILS */}

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={resumeData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resumeData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={resumeData.phone}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        value={resumeData.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn URL"
        value={resumeData.linkedin}
        onChange={handleChange}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        value={resumeData.github}
        onChange={handleChange}
      />

      {/* OBJECTIVE */}

      <h3>Objective</h3>

      <textarea
        name="objective"
        placeholder="Career Objective"
        value={resumeData.objective}
        onChange={handleChange}
      />

      {/* EDUCATION */}

      <h3>Education</h3>

      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={resumeData.degree}
        onChange={handleChange}
      />

      <input
        type="text"
        name="institution"
        placeholder="Institution"
        value={resumeData.institution}
        onChange={handleChange}
      />

      <input
        type="text"
        name="year"
        placeholder="Passing Year"
        value={resumeData.year}
        onChange={handleChange}
      />

      {/* EXPERIENCE */}

      <h3>Experience</h3>

      {resumeData.experiences.map((exp, index) => (
        <div
          key={index}
          className="dynamic-section"
        >
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) =>
              handleExperienceChange(
                index,
                "company",
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) =>
              handleExperienceChange(
                index,
                "role",
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) =>
              handleExperienceChange(
                index,
                "duration",
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) =>
              handleExperienceChange(
                index,
                "description",
                e.target.value
              )
            }
          />

          {resumeData.experiences.length > 1 && (
            <button
              type="button"
              className="delete-btn"
              onClick={() =>
                removeExperience(index)
              }
            >
              🗑 Remove Experience
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        className="save-btn"
        onClick={addExperience}
      >
        + Add Experience
      </button>
            {/* PROJECTS */}

      <h3>Projects</h3>

      {resumeData.projects.map((project, index) => (
        <div
          key={index}
          className="dynamic-section"
        >
          <input
            type="text"
            placeholder="Project Name"
            value={project.name}
            onChange={(e) =>
              handleProjectChange(
                index,
                "name",
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Technologies Used"
            value={project.technologies}
            onChange={(e) =>
              handleProjectChange(
                index,
                "technologies",
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Project Description"
            value={project.description}
            onChange={(e) =>
              handleProjectChange(
                index,
                "description",
                e.target.value
              )
            }
          />

          {resumeData.projects.length > 1 && (
            <button
              type="button"
              className="delete-btn"
              onClick={() =>
                removeProject(index)
              }
            >
              🗑 Remove Project
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        className="save-btn"
        onClick={addProject}
      >
        + Add Project
      </button>

      {/* CERTIFICATES */}

      <h3>Certificates</h3>

      {resumeData.certificates.map(
        (certificate, index) => (
          <div
            key={index}
            className="dynamic-section"
          >
            <input
              type="text"
              placeholder="Certificate Name"
              value={certificate.title}
              onChange={(e) =>
                handleCertificateChange(
                  index,
                  "title",
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Issuer"
              value={certificate.issuer}
              onChange={(e) =>
                handleCertificateChange(
                  index,
                  "issuer",
                  e.target.value
                )
              }
            />

            {resumeData.certificates.length >
              1 && (
              <button
                type="button"
                className="delete-btn"
                onClick={() =>
                  removeCertificate(index)
                }
              >
                🗑 Remove Certificate
              </button>
            )}
          </div>
        )
      )}

      <button
        type="button"
        className="save-btn"
        onClick={addCertificate}
      >
        + Add Certificate
      </button>

      {/* SKILLS */}

      <h3>Technical Skills</h3>

      <textarea
        name="skills"
        placeholder="Java, Python, React, MongoDB, SQL..."
        value={resumeData.skills}
        onChange={handleChange}
      />

      {/* ACHIEVEMENTS */}

      <h3>Achievements</h3>

      <textarea
        name="achievements"
        placeholder="Awards, Scholarships, Hackathons..."
        value={resumeData.achievements}
        onChange={handleChange}
      />

      {/* SAVE */}

      <button
        type="button"
        className="save-btn"
        onClick={handleSaveResume}
      >
        💾 Save Resume
      </button>

    </div>
  );
}

export default ResumeForm;
