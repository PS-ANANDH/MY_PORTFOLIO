import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "all",        label: "All Projects",      icon: "🌐" },
  { id: "erp",        label: "ERP Systems",        icon: "🏭" },
  { id: "web",        label: "Web Apps",           icon: "💻" },
  { id: "ai",         label: "AI Powered",         icon: "🧠" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Supermarket ERP Software",
    desc: "Full-featured supermarket management system with billing, inventory, GST management, purchase modules, and real-time stock tracking with voice AI integration.",
    tech: ["React", "Node.js", "Electron Builder", "MySQL"],
    category: "erp",
    icon: "🛒",
    color: "#a855f7",
    status: "completed",
    highlights: ["POS Billing", "Stock Management", "GST Reports", "Voice AI"],
  },
  {
    id: 2,
    title: "Construction ERP Software",
    desc: "Enterprise construction management with project tracking, contractor management, material procurement, financial ledgers, and site progress monitoring.",
    tech: ["React", "Node.js", "Electron Builder", "MySQL"],
    category: "erp",
    icon: "🏗️",
    color: "#f59e0b",
    status: "completed",
    highlights: ["Project Tracking", "Contractor Mgmt", "Procurement", "Finance"],
  },
  {
    id: 3,
    title: "Bakery ERP Software",
    desc: "Smart bakery management platform with recipe costing, production planning, POS billing, ingredient tracking, and daily sales analytics with voice assistant.",
    tech: ["React", "Node.js", "Electron Builder", "MySQL", "Voice AI"],
    category: "erp",
    icon: "🥐",
    color: "#f472b6",
    status: "completed",
    highlights: ["POS System", "Recipe Costing", "Voice AI", "Analytics"],
  },
  {
    id: 4,
    title: "Jewellery Shop ERP",
    desc: "Premium jewellery store management with gold & silver pricing, hallmark tracking, customer purchase history, EMI management, and detailed inventory.",
    tech: ["React", "Node.js", "Electron Builder", "MySQL"],
    category: "erp",
    icon: "💎",
    color: "#fbbf24",
    status: "completed",
    highlights: ["Gold Pricing", "Hallmark Track", "EMI Mgmt", "Inventory"],
  },
  {
    id: 5,
    title: "Mobile Shop ERP",
    desc: "Complete mobile store management with IMEI tracking, warranty management, sales billing, repair service module, and supplier management system.",
    tech: ["React", "Node.js", "Electron Builder", "MySQL"],
    category: "erp",
    icon: "📱",
    color: "#22c55e",
    status: "completed",
    highlights: ["IMEI Tracking", "Warranty Mgmt", "Repair Service", "Billing"],
  },
  {
    id: 6,
    title: "CRM Web Application",
    desc: "Customer Relationship Management system with lead tracking, follow-up reminders, sales pipeline management, customer interaction history, and team performance analytics.",
    tech: ["React", "Node.js", "MySQL", "REST API"],
    category: "web",
    icon: "🤝",
    color: "#3b82f6",
    status: "completed",
    highlights: ["Lead Tracking", "Pipeline Mgmt", "Analytics", "Follow-ups"],
  },
  {
    id: 7,
    title: "Electronic Service Module",
    desc: "Electronics repair management with job card creation, fault diagnosis tracking, customer notification, spare parts inventory, and technician assignment system.",
    tech: ["React", "Node.js", "MySQL", "HTML", "CSS"],
    category: "web",
    icon: "🔧",
    color: "#06b6d4",
    status: "completed",
    highlights: ["Job Cards", "Parts Inventory", "Notifications", "Tech Assign"],
  },
  {
    id: 8,
    title: "LIC Policy Portfolio",
    desc: "Life Insurance Corporation policy management system for tracking policy details, premium schedules, maturity dates, client portfolios, and renewal reminders.",
    tech: ["React", "Node.js", "MySQL", "HTML", "CSS"],
    category: "web",
    icon: "📋",
    color: "#8b5cf6",
    status: "completed",
    highlights: ["Policy Track", "Premium Mgmt", "Renewals", "Reports"],
  },
  {
    id: 9,
    title: "DineHome E-Commerce",
    desc: "Responsive e-commerce platform for online food and home product ordering with modules for login, product listing, cart, order management, and RESTful APIs.",
    tech: ["React", "Node.js", "MySQL", "HTML", "CSS"],
    category: "web",
    icon: "🍽️",
    color: "#ef4444",
    status: "completed",
    image: "./images/DineHome.jpeg",
    highlights: ["Order Mgmt", "Cart System", "Auth Module", "REST APIs"],
  },
  {
    id: 10,
    title: "AI Resume Analyzer",
    desc: "AI-powered web app that analyzes resumes, matches candidate skills with job openings, extracts keywords, and provides intelligent job recommendations.",
    tech: ["React", "Node.js", "MySQL", "HTML", "CSS"],
    category: "ai",
    icon: "📄",
    color: "#10b981",
    status: "completed",
    image: "./images/CvAnalyZer.jpeg",
    highlights: ["Resume Parse", "Skill Match", "Job Suggest", "AI Engine"],
  },
  {
    id: 11,
    title: "AI CodeFixer ChatBot",
    desc: "Intelligent code debugging assistant that detects bugs automatically, suggests real-time fixes, and supports multiple programming languages for developers.",
    tech: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    category: "ai",
    icon: "🤖",
    color: "#6366f1",
    status: "completed",
    image: "./images/AiCodefixer.jpeg",
    highlights: ["Bug Detection", "Auto Fix", "Multi-lang", "Real-time"],
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filtered = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "60px" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge" style={{ justifyContent: "center" }}>
            <span className="dot" />
            Portfolio
          </div>
          <h2 className="section-title gradient-text" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px" }}>
            Featured Projects
          </h2>
          <p style={{ color: "#64748b", maxWidth: "520px", margin: "0 auto", fontFamily: "'Inter',sans-serif", lineHeight: 1.7 }}>
            {PROJECTS.length}+ projects spanning enterprise ERP systems, AI applications, and modern web platforms
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "50px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              className={`project-category-btn ${activeFilter === cat.id ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.icon} {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="projects-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="glass-card-project"
                style={{ padding: "24px", cursor: "pointer" }}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onHoverStart={() => setHoveredCard(project.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                {/* Card Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                  <motion.div
                    className="project-icon-wrap"
                    style={{
                      background: `${project.color}18`,
                      border: `1px solid ${project.color}35`,
                    }}
                    animate={hoveredCard === project.id ? { rotate: [0, -5, 5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    <span style={{ fontSize: "1.6rem" }}>{project.icon}</span>
                  </motion.div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                    <div className="status-badge status-completed">
                      <span style={{ width: "6px", height: "6px", background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
                      Completed
                    </div>
                  </div>
                </div>

                {/* Project Image (if available) */}
                {project.image && (
                  <div style={{
                    height: "100px", borderRadius: "10px", marginBottom: "14px",
                    overflow: "hidden", position: "relative",
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, borderRadius: "10px" }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(135deg, ${project.color}30, transparent)`,
                      borderRadius: "10px",
                    }} />
                  </div>
                )}

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#e2e8f0",
                  marginBottom: "10px",
                  lineHeight: 1.4,
                  transition: "color 0.3s ease",
                }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: "#64748b",
                  fontSize: "0.82rem",
                  lineHeight: 1.65,
                  fontFamily: "'Inter',sans-serif",
                  marginBottom: "14px",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {project.desc}
                </p>

                {/* Highlights */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                  {project.highlights.map((h) => (
                    <span key={h} style={{
                      padding: "3px 10px",
                      borderRadius: "100px",
                      background: `${project.color}12`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                      fontFamily: "'Fira Code',monospace",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                    }}>
                      {h}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(168,85,247,0.1)", margin: "12px 0" }} />

                {/* Tech Stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="project-tag" style={{ fontSize: "0.68rem" }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Total Count */}
        <motion.div
          style={{ textAlign: "center", marginTop: "50px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p style={{ color: "#334155", fontFamily: "'Fira Code',monospace", fontSize: "0.82rem" }}>
            Showing <span style={{ color: "#a855f7" }}>{filtered.length}</span> of{" "}
            <span style={{ color: "#00f5ff" }}>{PROJECTS.length}</span> projects
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;