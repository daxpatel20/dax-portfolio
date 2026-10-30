import React, { useEffect, useState } from "react";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import NetworkCanvas from "./NetworkCanvas";
import CodeWindow from "./CodeWindow";
import portfolioData from "../data/portfolio";
import resume from "../resume/daxresume.pdf";

const Hero = () => {
  const { personal, roles } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section id="home" className="hero">
      <NetworkCanvas />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="hero-layout container">
        <div className="hero-content">
          <div className="hero-badge hero-anim">
            <span className="pulse-dot" />
            {personal.availability}
          </div>

          <h1 className="hero-title">
            <span className="hero-line">
              <span className="hero-anim-line">Hi, I'm {personal.firstName}</span>
            </span>
            <span className="hero-line">
              <span className="hero-anim-line">
                I build <span className="grad-text">scalable</span>
              </span>
            </span>
            <span className="hero-line">
              <span className="hero-anim-line outline">web products.</span>
            </span>
          </h1>

          <div className="hero-role hero-anim">
            <span className="mono">&gt;_</span>
            <span className="role-window">
              <span key={roleIndex} className="role-text">
                {roles[roleIndex]}
              </span>
            </span>
          </div>

          <p className="hero-desc hero-anim">
            Fast, secure and pixel-perfect applications with React.js, Node.js and the MERN stack — from
            first idea to production deployment.
          </p>

          <div className="hero-actions hero-anim">
            <a href="#projects" className="btn btn-primary" data-magnetic>
              <span>View my work</span>
              <FiArrowDownRight />
            </a>
            <a href={resume} className="btn btn-ghost" download data-magnetic>
              <span>Download CV</span>
              <FiDownload />
            </a>
          </div>
        </div>

        <div className="hero-visual hero-anim">
          <CodeWindow />
        </div>
      </div>

      <div className="hero-footer container hero-anim">
        <div>
          <span className="mono muted">Based in</span>
          <strong>{personal.location}</strong>
        </div>
        <div className="scroll-cue">
          <span className="mono muted">Scroll</span>
          <span className="scroll-line" />
        </div>
        <div className="hero-footer-right">
          <span className="mono muted">Focus</span>
          <strong>MERN · React · APIs</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;
