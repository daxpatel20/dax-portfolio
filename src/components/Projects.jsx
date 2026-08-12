import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

import projects, {
  projectCategories,
} from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading projects-heading">
          <span className="section-label">My Work</span>

          <h2>
            Projects I've
            <span> built.</span>
          </h2>

          <p>
            A selection of projects where I combined clean code, modern
            technologies and thoughtful design.
          </p>
        </div>

        {/* Project Filters */}
        <div className="project-filter">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "project-filter-btn active"
                  : "project-filter-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />

                <div className="project-overlay">
                  <div className="project-overlay-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {project.featured && (
                  <span className="featured-badge">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <h3>No projects found</h3>

            <p>
              There are currently no projects in this category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="projects-bottom">
          <p>
            Want to see more of my work?
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Visit my GitHub
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
