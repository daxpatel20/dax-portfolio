import React, { useEffect, useState } from "react";
import portfolioData from "../data/portfolio";

const Header = () => {
  const { navigation, personal } = portfolioData;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <a href="#home" className="logo" data-magnetic onClick={() => setOpen(false)}>
        <span className="logo-mark">D</span>
        <span className="logo-text">
          {personal.firstName}
          <em>.dev</em>
        </span>
      </a>

      <nav className="nav">
        {navigation.map((item, i) => (
          <a key={item.href} href={item.href} className="nav-link" onClick={() => setOpen(false)}>
            <span className="nav-index">0{i + 1}</span>
            <span className="nav-roll" data-text={item.label}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <a href="#contact" className="header-cta" data-magnetic>
        <span className="pulse-dot" /> Hire me
      </a>

      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
    </header>
  );
};

export default Header;
