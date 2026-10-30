import React, { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import portfolioData from "../data/portfolio";

const Contact = () => {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-tag" data-reveal>
          <span>06</span> Contact
        </div>

        <h2 className="contact-title">
          <span className="hero-line">
            <span className="contact-line">Let's build</span>
          </span>
          <span className="hero-line">
            <span className="contact-line">
              something <em className="grad-text">iconic.</em>
            </span>
          </span>
        </h2>

        <div className="contact-grid">
          <div className="contact-side" data-reveal>
            <p className="lead">
              Have a project, role or idea? I'm currently open to full-time opportunities and freelance work.
            </p>
            <button className="email-pill" onClick={copyEmail} data-magnetic>
              <span>{personal.email}</span>
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
            <span className="mono muted copy-hint">{copied ? "Copied to clipboard" : "Click to copy"}</span>

            <div className="socials">
              {Object.entries(portfolioData.social).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer" className="social-link">
                  {name} <FiArrowUpRight />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit} data-reveal>
            <label className="field">
              <input name="name" value={form.name} onChange={onChange} placeholder=" " required />
              <span>Your name</span>
            </label>
            <label className="field">
              <input type="email" name="email" value={form.email} onChange={onChange} placeholder=" " required />
              <span>Your email</span>
            </label>
            <label className="field">
              <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder=" " required />
              <span>Tell me about your project</span>
            </label>
            <button type="submit" className="btn btn-primary btn-block" data-magnetic>
              <span>Send message</span> <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
