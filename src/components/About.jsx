import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    { icon: "🎯", title: "Goal-Oriented", desc: "Building solutions that solve real business problems" },
    { icon: "⚡", title: "Performance First", desc: "Optimized, scalable architectures from day one" },
    { icon: "🤝", title: "Team Player", desc: "Collaborative mindset with clear communication" },
    { icon: "🧠", title: "AI Enthusiast", desc: "Leveraging AI for smarter, faster applications" },
  ];

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "120px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "80px" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge" style={{ justifyContent: "center" }}>
            <span className="dot" />
            About Me
          </div>
          <h2 className="section-title gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            Who I Am
          </h2>
          <p style={{ color: "#64748b", maxWidth: "520px", margin: "0 auto", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}>
            Passionate developer crafting enterprise solutions with modern technology
          </p>
        </motion.div>

        {/* Main Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
          className="about-grid"
        >
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card" style={{ padding: "40px" }}>
              {/* Terminal header bar */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#fbbf24" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ marginLeft: "12px", fontFamily: "'Fira Code',monospace", fontSize: "0.78rem", color: "#475569" }}>
                  about.json
                </span>
              </div>

              <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.85rem", lineHeight: 2 }}>
                <div style={{ color: "#475569" }}>{"{"}</div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#a855f7" }}>"name"</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#00f5ff" }}>"Selva Anandh P"</span><span style={{ color: "#64748b" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#a855f7" }}>"role"</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#00f5ff" }}>"Full Stack Developer"</span><span style={{ color: "#64748b" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#a855f7" }}>"location"</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#00f5ff" }}>"Srivilliputtur ,Tamil Nadu, India 🇮🇳"</span><span style={{ color: "#64748b" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#a855f7" }}>"passion"</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#22c55e" }}>"Building ERP Softwares & Websites"</span><span style={{ color: "#64748b" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#a855f7" }}>"education"</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#f472b6" }}>"MCA – Kalasalingam University"</span><span style={{ color: "#64748b" }}>,</span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <span style={{ color: "#a855f7" }}>"status"</span>
                  <span style={{ color: "#64748b" }}>: </span>
                  <span style={{ color: "#22c55e" }}>"✅ Open to Opportunities"</span>
                </div>
                <div style={{ color: "#475569" }}>{"}"}</div>
              </div>
            </div>

            {/* Bio paragraph */}
            <motion.div
              style={{ marginTop: "24px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p style={{
                color: "#94a3b8",
                lineHeight: 1.8,
                fontSize: "0.98rem",
                fontFamily: "'Inter',sans-serif",
                marginBottom: "16px",
              }}>
                I'm a passionate <span style={{ color: "#a855f7", fontWeight: 600 }}>Full Stack Developer</span> and 
                MCA graduate from Kalasalingam University with deep expertise in building enterprise-grade 
                ERP systems, AI-powered tools, and modern web applications.
              </p>
              <p style={{
                color: "#64748b",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                fontFamily: "'Inter',sans-serif",
              }}>
                I've built <span style={{ color: "#00f5ff" }}>11+ production-ready projects</span> including Supermarket ERP,
                Construction ERP, Bakery ERP, Jewellery Shop, Mobile Shop, and CRM systems — turning complex 
                business requirements into clean, scalable software solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: "28px 20px", textAlign: "center" }}
                variants={itemVariant}
                whileHover={{ scale: 1.04, y: -4 }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{h.icon}</div>
                <h3 style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#e2e8f0",
                  marginBottom: "8px",
                }}>
                  {h.title}
                </h3>
                <p style={{
                  color: "#475569",
                  fontSize: "0.82rem",
                  fontFamily: "'Inter',sans-serif",
                  lineHeight: 1.5,
                }}>
                  {h.desc}
                </p>
              </motion.div>
            ))}

            {/* Contact quick links */}
            <motion.div
              className="glass-card"
              style={{ padding: "24px", gridColumn: "1 / -1" }}
              variants={itemVariant}
            >
              <p style={{ color: "#64748b", fontFamily: "'Fira Code',monospace", fontSize: "0.78rem", marginBottom: "16px" }}>
                // Quick Contact
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { icon: "📧", label: "selvaanandh8@gmail.com",   color: "#a855f7" },
                  { icon: "📞", label: "+91 6383025180",             color: "#00f5ff" },
                  { icon: "📍", label: "Krishnankoil, Tamil Nadu",   color: "#f472b6" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                    <span style={{ color: item.color, fontFamily: "'Fira Code',monospace", fontSize: "0.82rem" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;