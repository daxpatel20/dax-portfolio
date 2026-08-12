import React from "react";
import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

const Resume = () => {
  const experience = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Personal & Freelance Projects",
      period: "2025 — Present",
      description:
        "Building modern web applications using React.js, Node.js, Express.js and MongoDB with a strong focus on responsive UI and clean code.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Web Development Projects",
      period: "2024 — 2025",
      description:
        "Created responsive interfaces, reusable React components and interactive applications using modern frontend technologies.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      title: "Computer / Software Development",
      institute: "Education & Technical Learning",
      period: "2022 — Present",
      description:
        "Developing strong foundations in programming, web development, databases and software engineering.",
    },
    {
      id: 2,
      title: "Full Stack Development",
      institute: "Self Learning & Practical Projects",
      period: "2024 — Present",
      description:
        "Learning and applying frontend, backend, API development, authentication and database technologies through real projects.",
    },
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">My Resume</span>

          <h2>
            Experience &{" "}
            <span>education.</span>
          </h2>

          <p>
            My development journey, practical experience and continuous
            learning.
          </p>
        </div>

        {/* Resume Download */}
        <div className="resume-download">
          <div className="resume-download-content">
            <div className="resume-download-icon">
              <FaDownload />
            </div>

            <div>
              <span>Want to know more?</span>

              <h3>
                Download my complete resume
              </h3>
            </div>
          </div>

          <a
            href="/resume/dax-patel-resume.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
            <FaDownload />
          </a>
        </div>

        <div className="resume-grid">
          {/* Experience */}
          <div className="resume-column">
            <div className="resume-column-heading">
              <div className="resume-heading-icon">
                <FaBriefcase />
              </div>

              <div>
                <span>Career</span>
                <h3>Experience</h3>
              </div>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article
                  className="timeline-item"
                  key={item.id}
                >
                  <span className="timeline-dot"></span>

                  <div className="timeline-content">
                    <div className="timeline-date">
                      <FaCalendarAlt />
                      {item.period}
                    </div>

                    <h4>{item.title}</h4>

                    <span className="timeline-company">
                      {item.company}
                    </span>

                    <p>{item.description}</p>

                    <div className="timeline-tags">
                      {item.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-column">
            <div className="resume-column-heading">
              <div className="resume-heading-icon">
                <FaGraduationCap />
              </div>

              <div>
                <span>Learning</span>
                <h3>Education</h3>
              </div>
            </div>

            <div className="timeline">
              {education.map((item) => (
                <article
                  className="timeline-item"
                  key={item.id}
                >
                  <span className="timeline-dot"></span>

                  <div className="timeline-content">
                    <div className="timeline-date">
                      <FaCalendarAlt />
                      {item.period}
                    </div>

                    <h4>{item.title}</h4>

                    <span className="timeline-company">
                      {item.institute}
                    </span>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Footer CTA */}
        <div className="resume-footer">
          <p>
            I'm always interested in learning, building and
            working on new challenges.
          </p>

          <a href="#contact" className="text-link">
            Let's talk
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
