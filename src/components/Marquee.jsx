import React from "react";

const words = ["React.js", "Node.js", "Express", "MongoDB", "JavaScript", "REST APIs", "Tailwind", "UI Engineering"];

const Marquee = () => (
  <div className="marquee-wrap" aria-hidden="true">
    <div className="marquee marquee-a">
      <div className="marquee-track">
        {[...words, ...words].map((w, i) => (
          <span key={i}>
            {w} <i>✦</i>
          </span>
        ))}
      </div>
    </div>
    <div className="marquee marquee-b">
      <div className="marquee-track reverse">
        {[...words, ...words].map((w, i) => (
          <span key={i}>
            Build · Ship · Scale <i>●</i>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Marquee;
