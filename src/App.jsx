import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const lenisRef = useRef(null);
  const onLoaded = useCallback(() => setLoaded(true), []);

  // Smooth scrolling + anchor handling.
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    lenis.stop();

    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      const target = href.length > 1 && document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: 0 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  // All scroll-driven animation, started once the preloader leaves.
  useEffect(() => {
    if (!loaded) return;
    lenisRef.current?.start();
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.25 })
        .from(".hero-anim-line", { yPercent: 115, duration: 1.3, stagger: 0.12, ease: "expo.out" })
        .from(".hero-anim", { y: 30, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out" }, "-=0.9")
        .from(".header", { y: -40, opacity: 0, duration: 0.9, ease: "power3.out" }, "<");

      gsap.to(".hero-layout", {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.utils.toArray("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".word-inner"), {
          yPercent: 115,
          duration: 1.1,
          stagger: 0.05,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      gsap.utils.toArray("[data-count]").forEach((el) => {
        const counter = { v: 0 };
        gsap.to(counter, {
          v: Number(el.dataset.count),
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => (el.textContent = Math.round(counter.v)),
        });
      });

      gsap.utils.toArray(".skill-meter span").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 95%" },
        });
      });

      // Stacked project cards: each one shrinks back as the next slides over it.
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.to(card.querySelector(".project-inner"), {
          scale: 0.9,
          filter: "brightness(0.82)",
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 15%", scrub: true },
        });
      });

      gsap.utils.toArray(".project-media img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8, scale: 1.15 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      gsap.from(".timeline-progress", {
        scaleY: 0,
        ease: "none",
        scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 60%", scrub: true },
      });

      gsap.from(".contact-line", {
        yPercent: 115,
        duration: 1.3,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: { trigger: ".contact-title", start: "top 85%" },
      });

      gsap.from(".footer-name", {
        yPercent: 40,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true },
      });
    });

    // Magnetic buttons on pointer devices.
    mm.add("(pointer: fine)", () => {
      const els = gsap.utils.toArray("[data-magnetic]");
      const handlers = els.map((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
        const move = (e) => {
          const r = el.getBoundingClientRect();
          xTo((e.clientX - r.left - r.width / 2) * 0.35);
          yTo((e.clientY - r.top - r.height / 2) * 0.35);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });
      return () => handlers.forEach((off) => off());
    });

    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [loaded]);

  return (
    <div className={`app ${loaded ? "is-loaded" : ""}`}>
      <Preloader onDone={onLoaded} />
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer onTop={() => lenisRef.current?.scrollTo(0)} />
    </div>
  );
};

export default App;
