import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "ERP Solutions Builder",
  "Prompt Engineer",
  "Node.js Developer",
];

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  // All typing state in refs — no extra rerenders
  const roleIdxRef = useRef(0);
  const charIdxRef = useRef(0);
  const isTypingRef = useRef(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const current = ROLES[roleIdxRef.current];

      if (isTypingRef.current) {
        // Typing forward
        if (charIdxRef.current < current.length) {
          charIdxRef.current += 1;
          setDisplayed(current.slice(0, charIdxRef.current));
          timeoutRef.current = setTimeout(tick, 70);
        } else {
          // Fully typed — pause then start erasing
          timeoutRef.current = setTimeout(() => {
            isTypingRef.current = false;
            tick();
          }, 1800);
        }
      } else {
        // Erasing
        if (charIdxRef.current > 0) {
          charIdxRef.current -= 1;
          setDisplayed(current.slice(0, charIdxRef.current));
          timeoutRef.current = setTimeout(tick, 35);
        } else {
          // Move to next role
          roleIdxRef.current = (roleIdxRef.current + 1) % ROLES.length;
          isTypingRef.current = true;
          timeoutRef.current = setTimeout(tick, 150);
        }
      }
    };

    // Wait for hero entrance animation to finish before typing
    timeoutRef.current = setTimeout(tick, 1200);
    return () => clearTimeout(timeoutRef.current);
  }, []); // runs once — no dependency array churn, no double-fire bug

  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const stats = [
    { number: "11+", label: "Projects Built" },
    { number: "2+", label: "Years Learning" },
    { number: "MCA", label: "Qualification" },
    { number: "5+", label: "Technologies" },
  ];

  const floatingIcons = [
    { icon: "☕", label: "Java",        top: "15%", left: "8%",  delay: 0   },
    { icon: "⚡", label: "Spring Boot", top: "25%", right: "8%", delay: 0.5 },
    { icon: "⚛️", label: "React",       top: "65%", left: "6%",  delay: 1   },
    { icon: "🟢", label: "Node.js",     top: "70%", right: "6%", delay: 1.5 },
    { icon: "🧠", label: "AI/ML",       top: "45%", left: "4%",  delay: 2   },
    { icon: "🗄️", label: "MySQL",       bottom: "25%", right: "10%", delay: 0.8 },
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      {/* Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            background: "rgba(10,10,30,0.8)",
            border: "1px solid rgba(168,85,247,0.25)",
            borderRadius: "14px",
            padding: "12px 16px",
            textAlign: "center",
            backdropFilter: "blur(10px)",
            zIndex: 2,
            cursor: "default",
            userSelect: "none",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay + 1, duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.1, borderColor: "rgba(0,245,255,0.5)" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
          >
            <div style={{ fontSize: "1.5rem" }}>{item.icon}</div>
            <div style={{ fontSize: "0.65rem", color: "#64748b", fontFamily: "'Fira Code',monospace", marginTop: "4px" }}>{item.label}</div>
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div style={{ maxWidth: "900px", width: "100%", textAlign: "center", position: "relative", zIndex: 3 }}>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}
        >
          <div className="section-badge">
            <span className="dot" />
            Available for Work — Tamil Nadu, India
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          style={{ display: "flex", justifyContent: "center", marginBottom: "32px", position: "relative" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Rotating rings */}
            <motion.div
              className="ring-decor ring-decor-1"
              style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-110px", marginLeft: "-110px" }}
            />
            <motion.div
              className="ring-decor ring-decor-2"
              style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-130px", marginLeft: "-130px" }}
            />
            <motion.div
              className="ring-decor ring-decor-3"
              style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-150px", marginLeft: "-150px" }}
            />
            <div className="profile-ring" style={{ width: "160px", height: "160px", position: "relative", zIndex: 2 }}>
              <img
                src="./images/Me.jpeg"
                alt="Selva Anandh P"
                className="profile-img"
                width="152"
                height="152"
                fetchpriority="high"
                style={{ width: "152px", height: "152px", objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            marginBottom: "12px",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="gradient-text">Selva Anandh P</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          style={{ marginBottom: "24px", minHeight: "36px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div style={{
            fontFamily: "'Fira Code',monospace",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "#94a3b8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px"
          }}>
            <span style={{ color: "#64748b" }}>&gt; </span>
            <span style={{ color: "#00f5ff" }}>{displayed}</span>
            <span className="typing-cursor" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            fontFamily: "'Inter',sans-serif",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          Building enterprise-grade ERP systems, AI-powered applications & scalable web solutions 
          with Java, React, Spring Boot and modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "60px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <motion.button
            onClick={scrollToProjects}
            style={{
              padding: "14px 32px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#fff",
              fontFamily: "'Outfit',sans-serif",
              fontWeight: "700",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(168,85,247,0.4)",
              transition: "all 0.3s ease",
            }}
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 0 50px rgba(168,85,247,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects 🚀
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            style={{
              padding: "14px 32px",
              borderRadius: "12px",
              background: "transparent",
              border: "1px solid rgba(0,245,255,0.35)",
              color: "#00f5ff",
              fontFamily: "'Outfit',sans-serif",
              fontWeight: "700",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            whileHover={{ scale: 1.05, y: -3, background: "rgba(0,245,255,0.08)", borderColor: "rgba(0,245,255,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me ✉️
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ marginTop: "60px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span style={{ color: "#334155", fontFamily: "'Fira Code',monospace", fontSize: "0.72rem" }}>scroll down</span>
          <motion.div
            style={{
              width: "2px", height: "40px",
              background: "linear-gradient(180deg, #a855f7, transparent)",
              borderRadius: "2px",
            }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "100px",
        background: "linear-gradient(transparent, #050510)",
        pointerEvents: "none", zIndex: 1,
      }} />

      <style>{`
        @media (max-width: 768px) {
          .ring-decor { display: none; }
          .hero-float-icon { display: none; }
        }
        @media (max-width: 640px) {
          [style*="gridTemplateColumns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;