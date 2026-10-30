import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import portfolioData from "../data/portfolio";

const formatTime = () =>
  new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
  });

const Footer = ({ onTop }) => {
  const { personal, navigation } = portfolioData;
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="mono muted">Local time · Surat</span>
            <strong>{time} IST</strong>
          </div>
          <nav className="footer-nav">
            {navigation.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <button className="to-top" onClick={onTop} aria-label="Back to top" data-magnetic>
            <FiArrowUp />
          </button>
        </div>

        <div className="footer-name" aria-hidden="true">
          {personal.firstName}
          <span>{personal.lastName}</span>
        </div>

        <div className="footer-bottom mono muted">
          <span>© {new Date().getFullYear()} {personal.name}</span>
          <span>Designed & built with React · GSAP · Canvas</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
