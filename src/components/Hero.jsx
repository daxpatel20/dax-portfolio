import React from "react";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import portfolioData from "../data/portfolio";

const Hero = () => {
  const { personal, social, hero } = portfolioData;

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            {personal.availability}
          </div>

          <p className="hero-greeting">
            {hero.greeting}
          </p>

          <h1 className="hero-title">
            <span>{personal.firstName}</span>{" "}
            <strong>{personal.lastName}</strong>
          </h1>

          <h2 className="hero-role">
            {hero.subtitle}
          </h2>

          <p className="hero-description">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button
              type="button"
              className="btn btn-primary"
              onClick={scrollToProjects}
            >
              {hero.primaryButton}
              <FaArrowRight />
            </button>

            <a
              href="/resume/dax-patel-resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload />
              {hero.secondaryButton}
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <span>Find me on</span>

            <div className="hero-social-links">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-card">
            <div className="code-window">
              <div className="code-window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="window-title">
                  dax.jsx
                </span>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span>{" "}
                  <span className="code-white">=</span>{" "}
                  <span className="code-yellow">{"{"}</span>
                </p>

                <p className="code-indent">
                  <span className="code-green">name:</span>{" "}
                  <span className="code-orange">
                    "{personal.name}"
                  </span>
                  ,
                </p>

                <p className="code-indent">
                  <span className="code-green">role:</span>{" "}
                  <span className="code-orange">
                    "{personal.role}"
                  </span>
                  ,
                </p>

                <p className="code-indent">
                  <span className="code-green">skills:</span>{" "}
                  <span className="code-yellow">[</span>
                </p>

                <p className="code-indent-double">
                  <span className="code-orange">
                    "React.js"
                  </span>
                  ,
                </p>

                <p className="code-indent-double">
                  <span className="code-orange">
                    "JavaScript"
                  </span>
                  ,
                </p>

                <p className="code-indent-double">
                  <span className="code-orange">
                    "Node.js"
                  </span>
                  ,
                </p>

                <p className="code-indent-double">
                  <span className="code-orange">
                    "MongoDB"
                  </span>
                </p>

                <p className="code-indent">
                  <span className="code-yellow">]</span>
                </p>

                <p>
                  <span className="code-yellow">{"}"}</span>;
                </p>

                <p className="code-comment">
                  // Let's build something amazing 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="floating-card floating-card-top">
            <span className="floating-icon">{"</>"}</span>
            <div>
              <strong>Clean Code</strong>
              <small>Reusable Components</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon">⚡</span>
            <div>
              <strong>Modern UI</strong>
              <small>Fast & Responsive</small>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span></span>
        <small>Scroll to explore</small>
      </div>
    </section>
  );
};

export default Hero;
