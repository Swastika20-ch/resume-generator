function ResumePreview({ resumeData }) {
  return (
    <div
      className="resume-card"
      id="resume-preview"
    >
      {/* HEADER */}

      <div className="resume-header">
        <h1>
          {resumeData.name || "YOUR NAME"}
        </h1>

        <div className="resume-contact">
          {resumeData.email}

          {resumeData.phone &&
            ` | ${resumeData.phone}`}

          {resumeData.address &&
            ` | ${resumeData.address}`}

          {resumeData.linkedin && (
            <>
              {" | "}
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </>
          )}

          {resumeData.github && (
            <>
              {" | "}
              <a
                href={resumeData.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </>
          )}
        </div>
      </div>

      {/* OBJECTIVE */}

      {resumeData.objective && (
        <section className="resume-section">
          <h2>Objective</h2>

          <p>{resumeData.objective}</p>
        </section>
      )}

      {/* EDUCATION */}

      {(resumeData.degree ||
        resumeData.institution ||
        resumeData.year) && (
        <section className="resume-section">
          <h2>Education</h2>

          <div className="resume-item">
            <div className="item-title">
              {resumeData.degree}
            </div>

            <div className="item-subtitle">
              {resumeData.institution}
            </div>

            <div className="item-date">
              {resumeData.year}
            </div>
          </div>
        </section>
      )}

      {/* EXPERIENCE */}

      {resumeData.experiences?.some(
        (exp) =>
          exp.company ||
          exp.role ||
          exp.duration ||
          exp.description
      ) && (
        <section className="resume-section">
          <h2>Experience</h2>

          {resumeData.experiences.map(
            (exp, index) => (
              <div
                key={index}
                className="resume-item"
              >
                <div className="item-title">
                  {exp.company}
                </div>

                <div className="item-subtitle">
                  {exp.role}
                </div>

                <div className="item-date">
                  {exp.duration}
                </div>

                <p>
                  {exp.description}
                </p>
              </div>
            )
          )}
        </section>
      )}

      {/* PROJECTS */}

      {resumeData.projects?.some(
        (project) =>
          project.name ||
          project.technologies ||
          project.description
      ) && (
        <section className="resume-section">
          <h2>Projects</h2>

          {resumeData.projects.map(
            (project, index) => (
              <div
                key={index}
                className="resume-item"
              >
                <div className="item-title">
                  {project.name}
                </div>

                <div className="item-subtitle">
                  {project.technologies}
                </div>

                <p>
                  {project.description}
                </p>
              </div>
            )
          )}
        </section>
      )}

      {/* CERTIFICATES */}

      {resumeData.certificates?.some(
        (certificate) =>
          certificate.title ||
          certificate.issuer
      ) && (
        <section className="resume-section">
          <h2>Certificates</h2>

          {resumeData.certificates.map(
            (certificate, index) => (
              <div
                key={index}
                className="resume-item"
              >
                <div className="item-title">
                  {certificate.title}
                </div>

                <div className="item-subtitle">
                  {certificate.issuer}
                </div>
              </div>
            )
          )}
        </section>
      )}

      {/* SKILLS */}

      {resumeData.skills && (
        <section className="resume-section">
          <h2>Technical Skills</h2>

          <p>{resumeData.skills}</p>
        </section>
      )}

      {/* ACHIEVEMENTS */}

      {resumeData.achievements && (
        <section className="resume-section">
          <h2>Achievements</h2>

          <p>
            {resumeData.achievements}
          </p>
        </section>
      )}
    </div>
  );
}

export default ResumePreview;