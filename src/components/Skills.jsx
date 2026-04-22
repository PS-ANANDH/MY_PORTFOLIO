import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  const categories = [
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "#a855f7",
      skills: [
        { name: "Java",         icon: "☕", level: 90 },
        { name: "Spring Boot",  icon: "🍃", level: 88 },
        { name: "REST APIs",    icon: "🔗", level: 85 },
        { name: "Node.js",      icon: "🟢", level: 70 },
      ],
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "#00f5ff",
      skills: [
        { name: "React",        icon: "⚛️", level: 78 },
        { name: "HTML5",        icon: "🌐", level: 92 },
        { name: "CSS3",         icon: "💅", level: 88 },
        // { name: "JavaScript",   icon: "✨", level: 80 },
      ],
    },
    {
      title: "Database & Tools",
      icon: "🗄️",
      color: "#f472b6",
      skills: [
        { name: "MySQL",        icon: "🐬", level: 87 },
        { name: "Eclipse IDE",  icon: "🌑", level: 85 },
        { name: "IntelliJ IDEA",icon: "🧩", level: 80 },
        { name: "VS Code",      icon: "💻", level: 90 },
        { name: "GitHub",       icon: "🐙", level: 80 },
      ],
    },
    {
      title: "AI & Innovation",
      icon: "🧠",
      color: "#fbbf24",
      skills: [
        { name: "Prompt Eng.",      icon: "🤖", level: 95 },
        { name: "Antigravity AI",   icon: "🪐", level: 88 },
        { name: "AI Integration",   icon: "⚡", level: 78 },
        { name: "Python / ML",      icon: "🐍", level: 72 },
      ],
    },
  ];

  const chipSkills = [
    { name: "Java",               icon: "☕" },
    { name: "Spring Boot",        icon: "🍃" },
    { name: "React",              icon: "⚛️" },
    { name: "Node.js",            icon: "🟢" },
    { name: "MySQL",              icon: "🐬" },
    { name: "HTML5",              icon: "🌐" },
    { name: "CSS3",               icon: "💅" },
    { name: "REST APIs",          icon: "🔗" },
    { name: "Git",                icon: "🌿" },
    { name: "Prompt Engineering", icon: "🤖" },
    { name: "Eclipse IDE",        icon: "🌑" },
    { name: "IntelliJ IDEA",      icon: "🧩" },
    { name: "VS Code",            icon: "💻" },
    { name: "Antigravity AI",     icon: "🪐" },
    { name: "GitHub",             icon: "🐙" },
  ];

  return (
    <section
      id="skills"
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
            Technical Skills
          </div>
          <h2 className="section-title gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            My Tech Stack
          </h2>
          <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto", fontFamily: "'Inter',sans-serif" }}>
            Technologies and tools I use to craft exceptional software solutions
          </p>
        </motion.div>

        {/* Skill Chips (Marquee-style) */}
        <motion.div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "70px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {chipSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-chip"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              whileHover={{ scale: 1.08, y: -3 }}
              onHoverStart={() => setHovered(skill.name)}
              onHoverEnd={() => setHovered(null)}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Cards with Progress Bars */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
        }}
          className="skills-grid"
        >
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass-card"
              style={{ padding: "32px" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.7 }}
              whileHover={{ y: -4 }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: `${cat.color}18`,
                  border: `1px solid ${cat.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem",
                }}>
                  {cat.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Outfit',sans-serif", fontWeight: 700,
                  fontSize: "1.05rem", color: "#e2e8f0",
                }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills with bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "0.9rem" }}>{skill.icon}</span>
                        <span style={{
                          fontFamily: "'Fira Code',monospace", fontSize: "0.85rem", color: "#e2e8f0",
                        }}>
                          {skill.name}
                        </span>
                      </div>
                      <span style={{
                        fontFamily: "'Fira Code',monospace", fontSize: "0.78rem", color: cat.color,
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.15 + si * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          style={{
            marginTop: "60px",
            padding: "32px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(0,245,255,0.06))",
            border: "1px solid rgba(168,85,247,0.2)",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p style={{
            fontFamily: "'Fira Code',monospace",
            fontSize: "0.9rem",
            color: "#94a3b8",
            lineHeight: 1.8,
          }}>
            <span style={{ color: "#a855f7" }}>const</span>{" "}
            <span style={{ color: "#00f5ff" }}>approach</span>{" "}
            <span style={{ color: "#64748b" }}>=</span>{" "}
            <span style={{ color: "#f472b6" }}>"Always learning, always building — turning ideas into impactful software."</span>
            <span style={{ color: "#64748b" }}>;</span>
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;