import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      period: "Jan 2025 – Mar 2025",
      title: "Python AI/ML Intern",
      company: "Prog-Tec Company",
      type: "Internship",
      icon: "🧪",
      color: "#a855f7",
      points: [
        "Developed a Parkinson's Disease Prediction System using Python, Machine Learning & Data Science.",
        "Collected and preprocessed medical datasets for accurate model training and testing.",
        "Applied SVM, Random Forest, and Logistic Regression algorithms for classification.",
        "Improved prediction accuracy through feature selection and hyperparameter tuning.",
        "Gained hands-on experience in real-time AI healthcare applications.",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML Algorithms"],
    },
    {
      period: "Sep 2024 – Present",
      title: "Full Stack Developer",
      company: "Independent / Freelance",
      type: "Project Work",
      icon: "💻",
      color: "#00f5ff",
      points: [
        "Built 8+ enterprise ERP systems including Supermarket, Construction, Bakery, Jewellery & Mobile Shop.",
        "Developed AI-powered Resume Analyzer and CodeFixer chatbot applications.",
        "Integrated React frontend with Node.js backend via RESTful APIs.",
        "Implemented Voice AI (Hey Elite) for hands-free ERP navigation and command processing.",
        "Designed and maintained complex MySQL databases with optimized queries.",
      ],
      tech: ["React", "Node.js", "MySQL", "REST APIs"],
    },
    {
      period: "2024",
      title: "CRM System Developer",
      company: "Freelance",
      type: "Project",
      icon: "🤝",
      color: "#3b82f6",
      points: [
        "Developed a comprehensive Customer Relationship Management (CRM) web application.",
        "Implemented lead tracking, sales pipeline management, and follow-up reminder modules.",
        "Created dashboards for customer interaction history and team performance analytics.",
        "Designed RESTful APIs using Node.js for seamless data communication.",
        "Built responsive user interfaces utilizing React and modern CSS techniques.",
      ],
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      period: "Sep 2024",
      title: "E-Commerce Web Developer",
      company: "Academic Project",
      type: "Project",
      icon: "🛒",
      color: "#f472b6",
      points: [
        "Built DineHome — a fully functional e-commerce platform for food & home products.",
        "Designed user authentication, product catalog, cart, and order management modules.",
        "Built robust backend with Node.js and maintained relational data using MySQL.",
        "Created responsive and user-friendly UI using HTML, CSS & JavaScript.",
        "Integrated RESTful APIs for product/order management with secure session handling.",
      ],
      tech: ["React", "Node.js", "MySQL", "HTML", "CSS"],
    },
  ];

  return (
    <section
      id="work-experience"
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
            Experience
          </div>
          <h2 className="section-title gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            Work Experience
          </h2>
          <p style={{ color: "#64748b", maxWidth: "480px", margin: "0 auto", fontFamily: "'Inter',sans-serif" }}>
            Professional journey — internships, freelance work, and project-based development
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "60px" }}>
          <div style={{
            position: "absolute",
            left: "20px", top: "24px", bottom: "24px",
            width: "2px",
            background: "linear-gradient(180deg, #a855f7, #00f5ff, #f472b6, transparent)",
            borderRadius: "2px",
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              style={{ position: "relative", marginBottom: i < experiences.length - 1 ? "40px" : 0 }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              {/* Timeline Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-49px", top: "20px",
                  background: `linear-gradient(135deg, ${exp.color}, ${exp.color}88)`,
                  boxShadow: `0 0 15px ${exp.color}50, 0 0 30px ${exp.color}30`,
                  fontSize: "1rem",
                }}
              >
                {exp.icon}
              </div>

              {/* Card */}
              <motion.div
                className="glass-card"
                style={{ padding: "32px" }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "20px",
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontWeight: 800, fontSize: "1.1rem",
                      color: "#e2e8f0", marginBottom: "6px",
                    }}>
                      {exp.title}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{
                        fontFamily: "'Fira Code',monospace",
                        fontSize: "0.85rem", color: exp.color,
                      }}>
                        📌 {exp.company}
                      </span>
                      <span style={{
                        padding: "2px 10px", borderRadius: "100px",
                        background: `${exp.color}15`, border: `1px solid ${exp.color}30`,
                        fontFamily: "'Fira Code',monospace", fontSize: "0.7rem", color: exp.color,
                      }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div style={{
                    padding: "6px 16px", borderRadius: "100px",
                    background: `${exp.color}12`,
                    border: `1px solid ${exp.color}30`,
                    fontFamily: "'Fira Code',monospace",
                    fontSize: "0.78rem", color: exp.color, whiteSpace: "nowrap",
                  }}>
                    📅 {exp.period}
                  </div>
                </div>

                {/* Bullet Points */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {exp.points.map((pt, pi) => (
                    <motion.div
                      key={pi}
                      style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + pi * 0.08 + 0.3 }}
                    >
                      <span style={{
                        color: exp.color, marginTop: "3px", flexShrink: 0, fontSize: "0.8rem",
                      }}>▹</span>
                      <span style={{
                        color: "#94a3b8", fontSize: "0.88rem",
                        fontFamily: "'Inter',sans-serif", lineHeight: 1.6,
                      }}>
                        {pt}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "12px", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="project-tag" style={{ fontSize: "0.72rem" }}>{t}</span>
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

export default WorkExperience;