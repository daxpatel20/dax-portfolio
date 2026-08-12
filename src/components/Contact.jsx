import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";

import portfolioData from "../data/portfolio";

const Contact = () => {
  const { personal, social, contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailSubject = encodeURIComponent(
      formData.subject || `Portfolio contact from ${formData.name}`
    );

    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${contact.email}?subject=${mailSubject}&body=${mailBody}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">Contact Me</span>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            Have an idea, project or opportunity? Send me a message and
            let's start a conversation.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-intro">
              <span className="contact-small-title">
                Get in touch
              </span>

              <h3>
                Have a project
                <span> in mind?</span>
              </h3>

              <p>
                I'm always open to discussing new projects, creative ideas,
                freelance opportunities or ways we can work together.
              </p>
            </div>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="contact-info-card"
            >
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email me</span>
                <strong>{personal.email}</strong>
              </div>

              <FaArrowRight className="contact-info-arrow" />
            </a>

            {/* Location */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <strong>{personal.location}</strong>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <span>Follow me</span>

              <div className="contact-social-links">
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

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact-submit"
              >
                <FaPaperPlane />
                Send Message
              </button>

              {submitted && (
                <p className="form-success">
                  Your email client should open with the message prepared.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
