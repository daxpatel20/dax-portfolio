import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

import portfolioData from "../data/portfolio";

const Footer = () => {
  const { personal, social, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>&lt;</span>
              {personal.firstName}
              <span>/&gt;</span>
            </a>

            <p>
              {personal.role} creating modern, responsive and
              user-focused web experiences.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="footer-email"
            >
              {personal.email}
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              {navigation.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h3>Explore</h3>

            <ul>
              {navigation.slice(5).map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <a href="/resume/dax-patel-resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-column footer-social-column">
            <h3>Let's Connect</h3>

            <p>
              Follow me and stay connected.
            </p>

            <div className="footer-social-links">
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} {personal.name}. Made with{" "}
            <FaHeart /> and code.
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;