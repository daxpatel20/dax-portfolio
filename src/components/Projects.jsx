import React from "react";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import Split from "./Split";
import projects from "../data/projects";

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <div className="section-head">
        <div className="section-tag" data-reveal>
          <span>04</span> Selected work
        </div>
        <h2 className="display-md">
          <Split>Projects crafted with</Split>{" "}
          <span className="grad-text">
            <Split>obsessive detail.</Split>
          </span>
        </h2>
      </div>

      <div className="project-stack">
        {projects.map((p, i) => (
          <article className="project-card" key={p.id} style={{ "--i": i }}>
            <div className="project-inner">
              <div className="project-info">
                <div className="project-meta mono">
                  <span className="accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost sm" data-magnetic>
                    <FiGithub /> <span>Source</span>
                  </a>
                  {p.live !== "#" && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary sm" data-magnetic>
                      <span>Live</span> <FiArrowUpRight />
                    </a>
                  )}
                </div>
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="project-media"
                data-cursor="View"
                aria-label={`${p.title} on GitHub`}
              >
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
