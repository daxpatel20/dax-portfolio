import React from "react";
import resume from "../resume/daxresume.pdf";
import profileImage from "../img/hek.png";
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
              href={resume}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload />
              {hero.viewbutton}
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

          <div className="hero-card hero-image-card">
            <div className="hero-image-shell">
              <img
                src={profileImage}
                alt="Developer portrait"
                className="hero-image"
              />
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
