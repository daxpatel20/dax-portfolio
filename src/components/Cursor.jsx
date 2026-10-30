import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.body.classList.add("has-cursor");

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.1 });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.1 });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e) => {
      const labelled = e.target.closest("[data-cursor]");
      const interactive = e.target.closest("a, button, input, textarea, [data-magnetic]");
      setLabel(labelled ? labelled.dataset.cursor : "");
      ringRef.current.classList.toggle("is-hover", Boolean(interactive) && !labelled);
      ringRef.current.classList.toggle("is-label", Boolean(labelled));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef}>
        <span>{label}</span>
      </div>
    </>
  );
};

export default Cursor;
