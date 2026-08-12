import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import portfolioData from "../data/portfolio";

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">About Me</span>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

          <p>
            A little more about who I am, what I do and how I approach
            development.
          </p>
        </div>

        <div className="about-grid">
          {/* About Visual */}
          <div className="about-visual">
            <div className="about-profile-card">
              <div className="profile-placeholder">
                <span>&lt;/&gt;</span>
              </div>

              <div className="profile-code">
                <span className="code-purple">developer</span>
                <span className="code-white">.</span>
                <span className="code-blue">passion</span>
                <span className="code-white"> = </span>
                <span className="code-orange">
                  "Building"
                </span>
              </div>
            </div>

            <div className="about-decoration about-decoration-one"></div>
            <div className="about-decoration about-decoration-two"></div>
          </div>

          {/* About Content */}
          <div className="about-content">
            <span className="about-intro">
              I'm {personal.firstName} {personal.lastName}
            </span>

            <h3>
              {personal.role} who loves building
              <span> modern web applications.</span>
            </h3>

            <p>
              {personal.bio}
            </p>

            <p>
              I enjoy turning complex problems into simple, beautiful and
              intuitive solutions. My focus is writing maintainable code while
              creating experiences that are fast, responsive and enjoyable to
              use.
            </p>

            {/* Information */}
            <div className="about-info">
              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaCode />
                </div>

                <div>
                  <span>Specialization</span>
                  <strong>React & Full Stack</strong>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaLaptopCode />
                </div>

                <div>
                  <span>Experience</span>
                  <strong>Project Based</strong>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <span>Learning</span>
                  <strong>Always Growing</strong>
                </div>
              </div>

              <div className="about-info-item">
                <div className="about-info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <strong>{personal.location}</strong>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href="#contact" className="about-cta">
              Let's Connect
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
