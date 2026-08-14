import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
   
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/patel-dax-20a1a7332/",
      icon: <FaLinkedinIn />,
    },
    {
      label: "GitHub",
      href: "https://github.com/daxpatel20",
      icon: <FaGithub />,
    },
  
  ];

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* Theme */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  /* Close mobile menu */
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="container header-container">
        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={handleNavClick}
          aria-label="Dax Patel Home"
        >
          <span className="logo-symbol">
            &lt;
          </span>

          <span className="logo-name">
            Dax<span>.</span>
          </span>

          <span className="logo-symbol">
            /&gt;
          </span>
        </a>

        {/* Desktop / Mobile Navigation */}
        <nav
          className={`navigation ${
            menuOpen ? "navigation-open" : ""
          }`}
        >
          <ul className="navigation-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Social Links */}
          <div className="mobile-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Desktop Social */}
          <div className="desktop-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Theme Button */}
          <button
            type="button"
            className="theme-toggle"
            onClick={() =>
              setDarkMode((previous) => !previous)
            }
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-toggle"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;