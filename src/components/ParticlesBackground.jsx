import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let particles = [];

    // Default purple color
    let accentRgb = "139, 92, 246";

    // Convert HEX color to RGB
    const parseColor = (value) => {
      const hex = value.trim().replace("#", "");

      if (/^[0-9a-fA-F]{6}$/.test(hex)) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return `${r}, ${g}, ${b}`;
      }

      return "139, 92, 246";
    };

    // Get website accent color
    const updateAccent = () => {
      const accent = getComputedStyle(
        document.documentElement
      )
        .getPropertyValue("--accent")
        .trim();

      accentRgb = parseColor(accent || "#8b5cf6");
    };

    // Create one particle
    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,

      // BIGGER PARTICLE SIZE
      // Minimum: 2.5px
      // Maximum: 6.5px
      radius: Math.random() * 4 + 2.5,

      // Particle movement speed
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,

      // Particle opacity
      opacity: Math.random() * 0.4 + 0.25,
    });

    // Resize canvas
    const resize = () => {
      // Keep DPR limited for performance
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      // Responsive particle count
      const count = Math.max(
        25,
        Math.min(
          55,
          Math.floor(
            (width * height) / 28000
          )
        )
      );

      particles = Array.from(
        { length: count },
        makeParticle
      );
    };

    // Draw animation
    const draw = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      for (
        let i = 0;
        i < particles.length;
        i += 1
      ) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap particle around screen
        if (p.x < -10) {
          p.x = width + 10;
        }

        if (p.x > width + 10) {
          p.x = -10;
        }

        if (p.y < -10) {
          p.y = height + 10;
        }

        if (p.y > height + 10) {
          p.y = -10;
        }

        // ==========================
        // DRAW PARTICLE BALL
        // ==========================

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(
          ${accentRgb},
          ${p.opacity}
        )`;

        ctx.fill();

        // ==========================
        // PARTICLE GLOW
        // ==========================

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.radius * 2,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(
          ${accentRgb},
          0.035
        )`;

        ctx.fill();

        // ==========================
        // CONNECT PARTICLES
        // ==========================

        for (
          let j = i + 1;
          j < particles.length;
          j += 1
        ) {
          const q = particles[j];

          const dx = p.x - q.x;
          const dy = p.y - q.y;

          const distance = Math.hypot(
            dx,
            dy
          );

          // Connection distance
          if (distance < 140) {
            const lineOpacity =
              (1 - distance / 140) *
              0.1;

            ctx.beginPath();

            ctx.moveTo(
              p.x,
              p.y
            );

            ctx.lineTo(
              q.x,
              q.y
            );

            ctx.strokeStyle = `rgba(
              ${accentRgb},
              ${lineOpacity}
            )`;

            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        }
      }

      animationFrame =
        window.requestAnimationFrame(draw);
    };

    // Initial setup
    updateAccent();
    resize();

    // Check reduced motion
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      draw();

      window.cancelAnimationFrame(
        animationFrame
      );
    } else {
      draw();
    }

    // Watch website theme change
    const themeObserver =
      new MutationObserver(() => {
        updateAccent();
      });

    themeObserver.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: [
          "data-theme",
          "class",
        ],
      }
    );

    // Window resize
    window.addEventListener(
      "resize",
      resize
    );

    // Cleanup
    return () => {
      window.cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-background"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
