import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certs = [
    {
      title: "Python AI/ML Internship",
      issuer: "Prog-Tec Company",
      date: "Mar 2025",
      icon: "🧪",
      color: "#a855f7",
      desc: "Completed hands-on internship in Python, Machine Learning and Data Science with Parkinson's disease prediction project.",
      badge: "Industry",
    },
    {
      title: "Java Full Stack Development",
      issuer: "Self-Learning & Projects",
      date: "2024–2025",
      icon: "☕",
      color: "#f59e0b",
      desc: "Mastered Java, Spring Boot, REST APIs, Hibernate & MySQL through 8+ enterprise ERP projects.",
      badge: "Project-Based",
    },
    {
      title: "React & Node.js Developer",
      issuer: "Self-Learning",
      date: "2024–2025",
      icon: "⚛️",
      color: "#00f5ff",
      desc: "Developed frontend with React and backend with Node.js for modern CRM and AI applications.",
      badge: "Skill Badge",
    },
    {
      title: "Prompt Engineering Specialist",
      issuer: "AI Tools Practitioner",
      date: "2025",
      icon: "🤖",
      color: "#10b981",
      desc: "Expert in crafting AI prompts for code generation, content creation, and intelligent automation workflows.",
      badge: "Emerging Tech",
    },
    {
      title: "ERP Systems Architect",
      issuer: "Industry Experience",
      date: "2024–2025",
      icon: "🏭",
      color: "#6366f1",
      desc: "Built 8+ full-featured ERP solutions for supermarket, construction, bakery, jewellery, and mobile sectors.",
      badge: "Domain Expert",
    },
    {
      title: "Voice AI Integration",
      issuer: "Personal Innovation",
      date: "2025",
      icon: "🎙️",
      color: "#f472b6",
      desc: "Developed Hey Elite voice assistant with wake-word detection, NLP commands, and ERP module control.",
      badge: "Innovation",
    },
    {
      title: "Java SE & EE (3 Months)",
      issuer: "G-Tec Education, Kalavasal Madurai",
      date: "Completed",
      icon: "📜",
      color: "#ef4444",
      desc: "Completed a comprehensive 3-month training program covering Java Standard and Enterprise Editions.",
      badge: "Course",
    },
  ];

  return (
    <section
      id="certifications"
      style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}
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
            Achievements
          </div>
          <h2 className="section-title gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            Certifications & Expertise
          </h2>
          <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}>
            Proven expertise across AI, Full Stack Development, ERP architecture, and emerging technologies
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
          className="certs-grid"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, borderColor: `${cert.color}50` }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: `linear-gradient(90deg, ${cert.color}, ${cert.color}44)`,
                borderRadius: "16px 16px 0 0",
              }} />

              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                <div style={{
                  width: "50px", height: "50px", borderRadius: "12px",
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", flexShrink: 0,
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                    <span style={{
                      padding: "2px 10px", borderRadius: "100px",
                      background: `${cert.color}15`, border: `1px solid ${cert.color}30`,
                      fontFamily: "'Fira Code',monospace", fontSize: "0.68rem",
                      color: cert.color, fontWeight: 600,
                    }}>
                      {cert.badge}
                    </span>
                    <span style={{
                      fontFamily: "'Fira Code',monospace", fontSize: "0.7rem", color: "#334155",
                    }}>
                      {cert.date}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Outfit',sans-serif", fontWeight: 700,
                    fontSize: "0.95rem", color: "#e2e8f0", lineHeight: 1.3,
                  }}>
                    {cert.title}
                  </h3>
                </div>
              </div>

              <p style={{
                fontFamily: "'Fira Code',monospace", fontSize: "0.78rem",
                color: cert.color, marginBottom: "12px",
              }}>
                {cert.issuer}
              </p>

              <p style={{
                color: "#475569", fontSize: "0.83rem",
                fontFamily: "'Inter',sans-serif", lineHeight: 1.6,
              }}>
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          style={{
            marginTop: "50px", textAlign: "center",
            fontFamily: "'Fira Code',monospace",
            fontSize: "0.8rem", color: "#334155",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span style={{ color: "#a855f7" }}>// </span>
          Continuously learning and expanding expertise in enterprise development & AI technologies
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Certifications;