import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const counter = { v: 0 };
    const tl = gsap.timeline();
    tl.to(counter, {
      v: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(counter.v)),
    })
      .to(".preloader-word", { yPercent: -100, duration: 0.6, ease: "power3.in" }, "+=0.15")
      .to(rootRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.9,
        ease: "expo.inOut",
        onStart: onDone,
        onComplete: () => setGone(true),
      });
    return () => tl.kill();
  }, [onDone]);

  if (gone) return null;

  return (
    <div className="preloader" ref={rootRef}>
      <div className="preloader-inner">
        <div className="preloader-mask">
          <span className="preloader-word">Dax Patel — Portfolio ©2026</span>
        </div>
        <div className="preloader-bar">
          <span style={{ transform: `scaleX(${count / 100})` }} />
        </div>
      </div>
      <div className="preloader-count">{String(count).padStart(3, "0")}</div>
    </div>
  );
};

export default Preloader;
