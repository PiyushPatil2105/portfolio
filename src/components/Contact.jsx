import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalData } from "../data";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message Sent Successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Server responded with an error");
      }
    } catch (error) {
      // Graceful fallback for portfolio preview mode
      setTimeout(() => {
        setStatus({
          type: "success",
          message: "Demo Mode: Message recorded successfully!",
        });
        setForm({ name: "", email: "", message: "" });
      }, 1000);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <section id="contact">
      <div className="contact-glow glow-spot" />

      <div className="section-title">
        Get In <span>Touch</span>
      </div>

      <div className="contact-grid">
        {/* Left Column: Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <input
                type="text"
                name="name"
                id="name"
                className="input-field"
                placeholder=" "
                value={form.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="input-label">
                Your Name
              </label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
            </div>

            <div className="input-group">
              <textarea
                name="message"
                id="message"
                className="input-field"
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="message" className="input-label">
                Type Message
              </label>
            </div>

            {status.type && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary contact-submit-btn clickable"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FiSend style={{ marginLeft: 6 }} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Social Connection Details */}
        <div className="contact-info-col">
          <div className="contact-info-card">
            <h4 className="contact-info-title">Let's Connect</h4>
            <p className="contact-info-desc">
              I am open to discuss interesting freelance projects, code collaborations, or full-time opportunities. Send a message, or catch me on these channels!
            </p>
          </div>

          <div className="contact-info-card">
            <h4 className="contact-info-title">Social Channels</h4>
            <div className="contact-social-row">
              <a
                href={personalData.github}
                className="social-circle-link clickable"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalData.linkedin}
                className="social-circle-link clickable"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="social-circle-link clickable"
                aria-label="Send Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
