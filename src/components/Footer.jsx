import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    { label: "LinkedIn",    icon: "💼", href: "https://www.linkedin.com/in/selva-anandh-p-2b5781293", color: "#3b82f6" },
    { label: "GitHub",      icon: "🐙", href: "https://github.com",                                    color: "#e2e8f0" },
    { label: "Email",       icon: "📧", href: "mailto:selvaanandh8@gmail.com",                       color: "#a855f7" },
    { label: "Phone",       icon: "📞", href: "tel:+91 6383025180",                                     color: "#22c55e" },
  ];

  const quickLinks = [
    { label: "About",        href: "#about" },
    { label: "Skills",       href: "#skills" },
    { label: "Projects",     href: "#projects" },
    { label: "Experience",   href: "#work-experience" },
    { label: "Education",    href: "#education" },
    { label: "Contact",      href: "#contact" },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      position: "relative",
      background: "rgba(5,5,16,0.95)",
      borderTop: "1px solid rgba(168,85,247,0.15)",
      padding: "60px 24px 30px",
      overflow: "hidden",
    }}>
      {/* Top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "1px",
        background: "linear-gradient(90deg, transparent, #a855f7, #00f5ff, transparent)",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Main Footer Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "40px", marginBottom: "50px" }} className="footer-grid">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "12px",
                background: "linear-gradient(135deg, #a855f7, #00f5ff)",
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden", padding: "2.5px",
                boxShadow: "0 0 20px rgba(168,85,247,0.4)",
              }}>
                <img src="./images/Me.jpeg" alt="Selva Anandh P" style={{ width: "100%", height: "100%", borderRadius: "9.5px", objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, color: "#e2e8f0", fontSize: "1.05rem" }}>
                  Selva Anandh P
                </div>
                <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.75rem", color: "#334155" }}>
                  Full Stack Developer
                </div>
              </div>
            </div>
            <p style={{
              color: "#334155", fontSize: "0.85rem",
              fontFamily: "'Inter',sans-serif", lineHeight: 1.7, maxWidth: "300px",
            }}>
              Building enterprise ERP systems, AI-powered applications, and modern web solutions with Java, React & Spring Boot.
            </p>
            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <motion.div
                style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span style={{ color: "#22c55e", fontFamily: "'Fira Code',monospace", fontSize: "0.78rem" }}>
                Open to Work — Tamil Nadu, India
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 style={{
              fontFamily: "'Fira Code',monospace", fontWeight: 600,
              color: "#a855f7", fontSize: "0.82rem", marginBottom: "20px",
              textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              // Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    color: "#475569", fontFamily: "'Inter',sans-serif",
                    fontSize: "0.88rem", textDecoration: "none",
                    display: "flex", alignItems: "center", gap: "8px",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{ x: 6, color: "#e2e8f0" }}
                >
                  <span style={{ color: "#334155" }}>▹</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{
              fontFamily: "'Fira Code',monospace", fontWeight: 600,
              color: "#00f5ff", fontSize: "0.82rem", marginBottom: "20px",
              textTransform: "uppercase", letterSpacing: "0.1em",
            }}>
              // Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="footer-social-link"
                  style={{ textDecoration: "none" }}
                  whileHover={{ x: 6 }}
                >
                  <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                  <span style={{ color: s.color }}>{s.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider-gradient" />

        {/* Bottom Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ color: "#aa70b3ff", fontFamily: "'Fira Code',monospace", fontSize: "0.78rem" }}>
            © 2025 <span style={{ color: "#a855f7" }}>Selva Anandh P</span> · All Rights Reserved
          </p>
          <p style={{ color: "#aa70b3ff", fontFamily: "'Fira Code',monospace", fontSize: "0.75rem" }}>
            Built with <span style={{ color: "#ef4444" }}>❤️</span> using{" "}
            <span style={{ color: "#61DAFB" }}>React</span> &{" "}
            <span style={{ color: "#a855f7" }}>Framer Motion</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;