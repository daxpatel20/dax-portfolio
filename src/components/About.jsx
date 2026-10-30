import React, { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Split from "./Split";
import portfolioData from "../data/portfolio";
import portrait from "../img/profile.jpg";

const About = () => {
  const { personal, stats } = portfolioData;
  const cardRef = useRef(null);

  // 3D tilt that follows the pointer.
  const onMove = (e) => {
    const card = cardRef.current;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty("--rx", `${-y * 14}deg`);
    card.style.setProperty("--ry", `${x * 14}deg`);
    card.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-tag" data-reveal>
          <span>01</span> About me
        </div>

        <div className="about-grid">
          <div className="portrait-stage" data-reveal>
            <div className="portrait-card" ref={cardRef} onPointerMove={onMove} onPointerLeave={onLeave}>
              <img src={portrait} alt={`Portrait of ${personal.name}`} />
              <div className="portrait-glare" />
              <div className="portrait-meta">
                <span className="mono">{personal.name}</span>
                <span className="mono accent">{personal.role}</span>
              </div>
              <div className="portrait-chip chip-a">
                <span className="mono">const</span> dev = <b>"passion"</b>
              </div>
              <div className="portrait-chip chip-b">⚡ MERN Stack</div>
            </div>
          </div>

          <div className="about-copy">
            <h2 className="display-md">
              <Split>I turn complex problems into</Split>{" "}
              <span className="grad-text">
                <Split>elegant digital products.</Split>
              </span>
            </h2>

            <p className="lead" data-reveal>
              I'm {personal.firstName}, a {personal.role.toLowerCase()} from {personal.location}. {personal.bio}
            </p>
            <p className="muted" data-reveal>
              My focus is writing maintainable code while crafting experiences that are fast, responsive and
              genuinely enjoyable to use — the kind of polish that makes a product feel premium.
            </p>

            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label} data-reveal>
                  <strong>
                    <span data-count={s.value}>0</span>
                    <em>{s.suffix}</em>
                  </strong>
                  <span className="mono muted">{s.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="text-link" data-reveal>
              Let's connect <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
