import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaServer,
  FaGlobe,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

import services from "../data/services";

const iconMap = {
  FaCode: <FaCode />,
  FaLaptopCode: <FaLaptopCode />,
  FaPalette: <FaPalette />,
  FaServer: <FaServer />,
  FaGlobe: <FaGlobe />,
  FaRocket: <FaRocket />,
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">What I Do</span>

          <h2>
            Services built around
            <span> your ideas.</span>
          </h2>

          <p>
            From frontend interfaces to complete web applications, I focus on
            creating reliable and modern digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.id}
            >
              {/* Card Number */}
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="service-icon">
                {iconMap[service.icon]}
              </div>

              {/* Content */}
              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                {/* Features */}
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Arrow */}
              <div className="service-arrow">
                <FaArrowRight />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <div>
            <span className="section-label">Have a project?</span>

            <h3>
              Let's turn your idea into
              <span> something real.</span>
            </h3>
          </div>

          <a href="#contact" className="btn btn-primary">
            Start a Conversation
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
