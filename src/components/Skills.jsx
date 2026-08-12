import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaServer,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import skills from "../data/skills";

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiJavascript: <FaJs />,
  FaReact: <FaReact />,
  SiTailwindcss: <SiTailwindcss />,
  FaBootstrap: <FaBootstrap />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  FaGithub: <FaGithub />,
  FaServer: <FaServer />,
  FaFigma: <FaFigma />,
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">My Skills</span>
          <h2>
            Technologies I <span>work with.</span>
          </h2>
          <p>
            A practical stack for building modern, responsive and scalable
            web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.id}>
              <div className="skill-card-top">
                <div className="skill-icon" aria-hidden="true">
                  {iconMap[skill.icon]}
                </div>
                <span className="skill-category">{skill.category}</span>
              </div>

              <div className="skill-name-row">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>

              <div
                className="skill-progress"
                aria-label={`${skill.name} skill level ${skill.level}%`}
              >
                <span style={{ width: `${skill.level}%` }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
