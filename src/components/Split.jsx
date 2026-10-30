import React from "react";

// Splits text into masked words so GSAP can slide each one up on reveal.
const Split = ({ children, className = "" }) => (
  <span className={`split ${className}`} data-split>
    {String(children)
      .split(" ")
      .map((word, i) => (
        <span className="word" key={i}>
          <span className="word-inner">{word}&nbsp;</span>
        </span>
      ))}
  </span>
);

export default Split;
