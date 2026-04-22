import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["hero", "about", "skills", "education", "certifications", "work-experience", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home",       href: "#hero",            section: "hero" },
    { name: "About",      href: "#about",           section: "about" },
    { name: "Skills",     href: "#skills",          section: "skills" },
    { name: "Projects",   href: "#projects",        section: "projects" },
    { name: "Contact",    href: "#contact",         section: "contact" },
  ];

  const scrollTo = (href) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Selva_Anandh_P.pdf";
    link.download = "Selva_Anandh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ padding: "0 24px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "linear-gradient(135deg, #a855f7, #00f5ff)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden", padding: "2px",
                  boxShadow: "0 0 15px rgba(168,85,247,0.5)"
                }}
                animate={{ boxShadow: ["0 0 15px rgba(168,85,247,0.5)", "0 0 25px rgba(0,245,255,0.5)", "0 0 15px rgba(168,85,247,0.5)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img src="./images/Me.jpeg" alt="Selva Anandh P" style={{ width: "100%", height: "100%", borderRadius: "8px", objectFit: "cover" }} />
              </motion.div>
              <span className="nav-logo-text">selva anandh</span>
            </motion.a>

            {/* Desktop Nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }} className="desktop-nav">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${activeSection === item.section ? "active" : ""}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Right Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <motion.button
                onClick={downloadResume}
                style={{
                  padding: "8px 18px", borderRadius: "10px",
                  background: "transparent",
                  border: "1px solid rgba(168,85,247,0.4)",
                  color: "#a855f7", fontFamily: "'Fira Code', monospace",
                  fontSize: "0.82rem", fontWeight: "500", cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                whileHover={{
                  background: "rgba(168,85,247,0.1)",
                  borderColor: "rgba(168,85,247,0.7)",
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="desktop-nav"
              >
                📄 Resume
              </motion.button>

              <motion.button
                className="hire-btn"
                onClick={() => scrollTo("#contact")}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me ⚡
              </motion.button>

              {/* Hamburger */}
              <motion.button
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "8px", display: "none"
                }}
                className="hamburger-btn"
                onClick={() => setIsMenuOpen(true)}
                whileTap={{ scale: 0.9 }}
                aria-label="Open menu"
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{
                      width: "24px", height: "2px",
                      background: "linear-gradient(90deg, #a855f7, #00f5ff)",
                      borderRadius: "2px"
                    }} />
                  ))}
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              style={{
                position: "absolute", top: "24px", right: "24px",
                background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)",
                borderRadius: "10px", width: "44px", height: "44px",
                color: "#a855f7", fontSize: "1.3rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.section ? "active" : ""}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 12 }}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.button
              className="hire-btn"
              onClick={() => { scrollTo("#contact"); setIsMenuOpen(false); }}
              style={{ marginTop: "24px", fontSize: "1.1rem", padding: "16px 40px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Hire Me ⚡
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;