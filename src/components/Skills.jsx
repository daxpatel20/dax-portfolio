import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGithub, FaServer, FaFigma } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import Split from "./Split";
import skills from "../data/skills";

const icons = {
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGithub, FaServer, FaFigma,
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb,
};

// Spotlight follows the pointer inside each tile.
const onMove = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <div className="section-head">
        <div className="section-tag" data-reveal>
          <span>02</span> Tech stack
        </div>
        <h2 className="display-md">
          <Split>Tools I use to</Split>{" "}
          <span className="grad-text">
            <Split>build the future.</Split>
          </span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => {
          const Icon = icons[skill.icon];
          return (
            <div
              className={`skill-tile ${i === 3 || i === 6 ? "wide" : ""}`}
              key={skill.id}
              onPointerMove={onMove}
              data-reveal
            >
              <div className="skill-top">
                <span className="skill-icon">{Icon && <Icon />}</span>
                <span className="mono muted">{skill.category}</span>
              </div>
              <div className="skill-bottom">
                <h3>{skill.name}</h3>
                <div className="skill-meter">
                  <span style={{ "--level": skill.level / 100 }} />
                </div>
                <span className="mono skill-level">{skill.level}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
