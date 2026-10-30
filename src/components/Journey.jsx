import React from "react";
import { FiDownload } from "react-icons/fi";
import Split from "./Split";
import portfolioData from "../data/portfolio";
import resume from "../resume/daxresume.pdf";

const Journey = () => (
  <section id="journey" className="section journey">
    <div className="container">
      <div className="section-head row">
        <div>
          <div className="section-tag" data-reveal>
            <span>05</span> Journey
          </div>
          <h2 className="display-md">
            <Split>Experience &</Split>{" "}
            <span className="grad-text">
              <Split>education.</Split>
            </span>
          </h2>
        </div>
        <a href={resume} download className="btn btn-primary" data-magnetic data-reveal>
          <span>Download resume</span> <FiDownload />
        </a>
      </div>

      <div className="timeline">
        <div className="timeline-line">
          <span className="timeline-progress" />
        </div>
        {portfolioData.experience.map((item) => (
          <div className="timeline-item" key={item.title} data-reveal>
            <span className="timeline-node" />
            <div className="mono timeline-period">{item.period}</div>
            <div className="timeline-body">
              <h3>{item.title}</h3>
              <span className="mono accent">{item.place}</span>
              <p>{item.description}</p>
              <div className="tags">
                {item.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Journey;
