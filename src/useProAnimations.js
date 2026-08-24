import { useEffect } from "react";

const useProAnimations = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealGroups = [
      [".section-heading", "reveal-up"],
      [".about-visual", "reveal-left"],
      [".about-content", "reveal-right"],
      [".about-info-item", "reveal-up"],
      [".skill-card", "reveal-up"],
      [".skills-highlight", "reveal-scale"],
      [".service-card", "reveal-up"],
      [".services-cta", "reveal-scale"],
      [".project-card", "reveal-up"],
      [".projects-bottom", "reveal-up"],
      [".resume-column", "reveal-up"],
      [".timeline-item", "reveal-left"],
      [".resume-download", "reveal-scale"],
      [".testimonial-wrapper", "reveal-scale"],
      [".contact-info", "reveal-left"],
      [".contact-form-wrapper", "reveal-right"],
      [".footer-top > *", "reveal-up"],
      [".footer-bottom", "reveal-up"],
    ];

    const animated = [];
    revealGroups.forEach(([selector, effect]) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add("pro-reveal", effect);
        el.style.setProperty("--reveal-delay", `${Math.min(index * 85, 425)}ms`);
        animated.push(el);
      });
    });

    if (reduceMotion) {
      animated.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -55px 0px" }
    );

    animated.forEach((el) => observer.observe(el));

    const heroSequence = [
      ".hero-badge",
      ".hero-greeting",
      ".hero-title",
      ".hero-role",
      ".hero-description",
      ".hero-buttons",
      ".hero-social",
      ".hero-visual",
      ".scroll-indicator",
    ];

    heroSequence.forEach((selector, index) => {
      const el = document.querySelector(selector);
      if (!el) return;
      el.classList.add("hero-enter");
      el.style.setProperty("--hero-delay", `${120 + index * 90}ms`);
      requestAnimationFrame(() => el.classList.add("hero-enter-active"));
    });

    const tiltTargets = document.querySelectorAll(
      ".service-card, .project-card, .skill-card, .about-profile-card, .contact-info-card"
    );

    const cleanupTilt = [];
    tiltTargets.forEach((card) => {
      const onMove = (event) => {
        if (window.innerWidth < 900) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
        card.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(1)}%`);
        card.style.setProperty("--shine-y", `${((y + 0.5) * 100).toFixed(1)}%`);
        card.classList.add("is-tilting");
      };
      const onLeave = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.classList.remove("is-tilting");
      };
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      cleanupTilt.push(() => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
    });

    const heroVisual = document.querySelector(".hero-visual");
    const onHeroMove = (event) => {
      if (!heroVisual || window.innerWidth < 900) return;
      const rect = heroVisual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      heroVisual.style.setProperty("--hero-x", `${x * 12}px`);
      heroVisual.style.setProperty("--hero-y", `${y * 10}px`);
    };
    const onHeroLeave = () => {
      if (!heroVisual) return;
      heroVisual.style.setProperty("--hero-x", "0px");
      heroVisual.style.setProperty("--hero-y", "0px");
    };
    heroVisual?.addEventListener("pointermove", onHeroMove);
    heroVisual?.addEventListener("pointerleave", onHeroLeave);

    return () => {
      observer.disconnect();
      cleanupTilt.forEach((fn) => fn());
      heroVisual?.removeEventListener("pointermove", onHeroMove);
      heroVisual?.removeEventListener("pointerleave", onHeroLeave);
    };
  }, []);
};

export default useProAnimations;
