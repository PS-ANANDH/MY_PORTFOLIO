import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xgvpjdnl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: "📧", label: "Email",    value: "selvaanandh8@gmail.com", href: "mailto:selvaanandh8@gmail.com", color: "#a855f7" },
    { icon: "📞", label: "Phone",    value: "+91 6383025180",            href: "tel:+91 6383025180",               color: "#00f5ff" },
    { icon: "💬", label: "WhatsApp", value: "Chat directly", href: "https://wa.me/916383025180?text=Hello%20Selva!%20I%20reviewed%20your%20impressive%20portfolio.%20Let's%20discuss%20an%20exciting%20career%20opportunity%20we%20have%20for%20you!", color: "#22c55e" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/selva-anandh", href: "https://www.linkedin.com/in/selva-anandh-p-2b5781293", color: "#3b82f6" },
    { icon: "🐙", label: "GitHub",   value: "github.com/PS-ANANDH",   href: "https://github.com",              color: "#f472b6" },
    { icon: "📍", label: "Location", value: "Srivilliputtur, Tamil Nadu 🇮🇳", href: "https://maps.google.com/?q=Srivilliputtur,Tamil+Nadu,India", color: "#fbbf24" },
  ];

  return (
    <section
      id="contact"
      style={{ position: "relative", padding: "120px 24px 80px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "70px" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge" style={{ justifyContent: "center" }}>
            <span className="dot" />
            Get In Touch
          </div>
          <h2 className="section-title gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            Let's Work Together
          </h2>
          <p style={{ color: "#64748b", maxWidth: "500px", margin: "0 auto", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}>
            Ready to build something amazing? Whether it's an ERP system, web app, or AI solution — I'm just a message away.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px", alignItems: "start" }} className="contact-grid">

          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Banner */}
            <div className="glass-card" style={{ padding: "24px", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <motion.div
                  style={{
                    width: "12px", height: "12px", borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 10px #22c55e",
                  }}
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span style={{ color: "#22c55e", fontFamily: "'Fira Code',monospace", fontSize: "0.85rem", fontWeight: 600 }}>
                  Available for Opportunities
                </span>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.85rem", fontFamily: "'Inter',sans-serif", lineHeight: 1.6 }}>
                I'm actively looking for full-stack development roles, ERP projects, and freelance opportunities. Let's connect!
              </p>
            </div>

            {/* Contact Info Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="contact-info-item"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="contact-icon-wrap" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                        <span>{item.icon}</span>
                      </div>
                      <div>
                        <div style={{ color: "#475569", fontFamily: "'Fira Code',monospace", fontSize: "0.7rem", marginBottom: "2px" }}>{item.label}</div>
                        <div style={{ color: item.color, fontFamily: "'Fira Code',monospace", fontSize: "0.82rem" }}>{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-info-item">
                      <div className="contact-icon-wrap" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                        <span>{item.icon}</span>
                      </div>
                      <div>
                        <div style={{ color: "#475569", fontFamily: "'Fira Code',monospace", fontSize: "0.7rem", marginBottom: "2px" }}>{item.label}</div>
                        <div style={{ color: item.color, fontFamily: "'Fira Code',monospace", fontSize: "0.82rem" }}>{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card" style={{ padding: "40px" }}>
              {/* Terminal Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#fbbf24" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ marginLeft: "12px", fontFamily: "'Fira Code',monospace", fontSize: "0.75rem", color: "#334155" }}>
                  send_message.sh
                </span>
              </div>

              {submitted ? (
                <motion.div
                  style={{ textAlign: "center", padding: "40px 0" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
                  <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, color: "#22c55e", marginBottom: "8px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#64748b", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem" }}>
                    I'll get back to you within 24 hours. Thank you!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {/* Honeypot — hidden from humans, bots will fill it, blocks spam */}
                  <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    <div>
                      <label style={{ display: "block", color: "#475569", fontFamily: "'Fira Code',monospace", fontSize: "0.72rem", marginBottom: "8px" }}>
                        $ name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="contact-input-new"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#475569", fontFamily: "'Fira Code',monospace", fontSize: "0.72rem", marginBottom: "8px" }}>
                        $ email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="contact-input-new"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#475569", fontFamily: "'Fira Code',monospace", fontSize: "0.72rem", marginBottom: "8px" }}>
                      $ subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project inquiry / Job opportunity"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="contact-input-new"
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "#475569", fontFamily: "'Fira Code',monospace", fontSize: "0.72rem", marginBottom: "8px" }}>
                      $ message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="contact-input-new"
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
                        Sending Message... ⏳
                      </motion.span>
                    ) : (
                      "Send Message ⚡"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;