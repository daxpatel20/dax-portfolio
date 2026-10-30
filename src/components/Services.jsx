import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Split from "./Split";
import portfolioData from "../data/portfolio";

const Services = () => (
  <section id="services" className="section services">
    <div className="container">
      <div className="section-head">
        <div className="section-tag" data-reveal>
          <span>03</span> What I do
        </div>
        <h2 className="display-md">
          <Split>Services that</Split>{" "}
          <span className="grad-text">
            <Split>move the needle.</Split>
          </span>
        </h2>
      </div>

      <div className="service-list">
        {portfolioData.services.map((s, i) => (
          <a href="#contact" className="service-row" key={s.title} data-reveal>
            <span className="mono service-num">/0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <span className="service-arrow">
              <FiArrowUpRight />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
