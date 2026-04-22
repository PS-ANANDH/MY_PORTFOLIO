import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kalasalingam Academy of Research & Education",
      location: "Krishnankoil, Tamil Nadu",
      period: "2023 – 2025",
      icon: "🎓",
      color: "#a855f7",
      highlights: ["Specialized in Full Stack Development", "Advanced Database Management", "AI & Machine Learning concepts"],
      cgpa: "Strong Academic Record",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Arulmigu Kalasalingam College of Arts & Science",
      location: "Krishnankoil, Tamil Nadu",
      period: "2020 – 2023",
      icon: "📚",
      color: "#00f5ff",
      highlights: ["Programming Fundamentals", "Software Engineering", "Database & Networking"],
      cgpa: "Consistent Performer",
    },
  ];

  return (
    <section
      id="education"
      style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

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
            Education
          </div>
          <h2 className="section-title gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            Academic Journey
          </h2>
          <p style={{ color: "#64748b", maxWidth: "420px", margin: "0 auto", fontFamily: "'Inter',sans-serif" }}>
            Solid academic foundation in Computer Science and Applications
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "60px" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "20px",
            top: "24px",
            bottom: "24px",
            width: "2px",
            background: "linear-gradient(180deg, #a855f7, #00f5ff, transparent)",
            borderRadius: "2px",
          }} />

          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              style={{ position: "relative", marginBottom: i < educationData.length - 1 ? "40px" : 0 }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              {/* Dot on timeline */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-49px",
                  top: "20px",
                  background: `linear-gradient(135deg, ${edu.color}, ${edu.color}88)`,
                  boxShadow: `0 0 15px ${edu.color}50, 0 0 30px ${edu.color}30`,
                }}
              >
                {edu.icon}
              </div>

              {/* Card */}
              <motion.div
                className="glass-card"
                style={{ padding: "32px" }}
                whileHover={{ x: 6, borderColor: `${edu.color}50` }}
                transition={{ duration: 0.3 }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "20px",
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      color: "#e2e8f0",
                      marginBottom: "6px",
                    }}>
                      {edu.degree}
                    </h3>
                    <p style={{
                      fontFamily: "'Fira Code',monospace",
                      fontSize: "0.88rem",
                      color: edu.color,
                      marginBottom: "4px",
                    }}>
                      {edu.institution}
                    </p>
                    <p style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: "0.82rem",
                      color: "#475569",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}>
                      📍 {edu.location}
                    </p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                    <div style={{
                      padding: "6px 16px",
                      borderRadius: "100px",
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}35`,
                      fontFamily: "'Fira Code',monospace",
                      fontSize: "0.8rem",
                      color: edu.color,
                      whiteSpace: "nowrap",
                    }}>
                      📅 {edu.period}
                    </div>
                    <div style={{
                      padding: "4px 12px",
                      borderRadius: "100px",
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.25)",
                      fontFamily: "'Fira Code',monospace",
                      fontSize: "0.72rem",
                      color: "#22c55e",
                    }}>
                      ✅ {edu.cgpa}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {edu.highlights.map((h, hi) => (
                    <motion.div
                      key={hi}
                      style={{ display: "flex", alignItems: "center", gap: "10px" }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + hi * 0.1 + 0.3 }}
                    >
                      <div style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: edu.color, flexShrink: 0,
                        boxShadow: `0 0 6px ${edu.color}`,
                      }} />
                      <span style={{
                        color: "#94a3b8",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "0.88rem",
                      }}>
                        {h}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;