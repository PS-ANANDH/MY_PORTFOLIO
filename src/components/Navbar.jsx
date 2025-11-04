import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", section: "hero" },
    { name: "About", href: "#about", section: "about" },
    { name: "Projects", href: "#projects", section: "projects" },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // CORRECTED: Use forward slash and remove "public" from path
    link.href = '/SELVA ANANDH.pdf'; // Change this to your actual resume file path
    link.download = 'Selva_Anandh_Resume.pdf'; // Change to your preferred file name
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "terminal-glass backdrop-blur-lg bg-black/80 border-b border-green-400/20" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.a
              href="#hero"
              className="text-green-400 font-mono text-lg font-bold hover:text-blue-400 transition-colors duration-300 cyber-text"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
            >
              {"MY PORT"}
            </motion.a>
          </motion.div>

          {/* Desktop Navigation - Centered with Download Button Below About */}
          <div className="hidden md:flex items-center justify-center flex-1 navbar-center-container">
            <div className="flex flex-col items-center justify-center relative">
              {/* Top Row - Navigation Buttons */}
              <div className="flex justify-center items-center w-full navbar-buttons-container">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`nav-button px-6 py-2.5 cursor-pointer text-sm font-mono font-bold transition-all duration-300 text-center mx-2 min-w-[100px] ${
                      activeSection === item.section
                        ? "nav-button-active"
                        : "nav-button-inactive"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Download Resume Button - Positioned below About button */}
              <motion.button
                onClick={downloadResume}
                className="download-resume-btn px-8 py-3 cursor-pointer text-sm font-mono font-bold transition-all duration-300 text-center min-w-[140px] absolute -bottom-16 left-3/4 transform -translate-x-1/2"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                📄 Download Resume
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className={`w-6 h-0.5 bg-green-400 rounded-full absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-4" : "top-3"
              }`}
              animate={{ rotate: isMenuOpen ? 45 : 0 }}
            />
            <motion.span
              className={`w-6 h-0.5 bg-green-400 rounded-full absolute top-4 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <motion.span
              className={`w-6 h-0.5 bg-green-400 rounded-full absolute transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-4" : "top-5"
              }`}
              animate={{ rotate: isMenuOpen ? -45 : 0 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 terminal-glass border-t border-green-400/20 backdrop-blur-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`nav-button-mobile block text-center font-mono text-sm font-bold transition-all duration-300 px-4 py-3 rounded-lg ${
                      activeSection === item.section
                        ? "nav-button-active"
                        : "nav-button-inactive"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Download Resume Button - Mobile */}
                <motion.button
                  onClick={() => {
                    downloadResume();
                    setIsMenuOpen(false);
                  }}
                  className="w-full download-resume-btn text-sm font-mono font-bold py-3 rounded-lg nav-button-inactive"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  📄 Download Resume
                </motion.button>
                
                <motion.button
                  className="w-full anime-button-hire text-sm font-mono font-bold mt-4 py-3"
                  onClick={() => {
                    scrollToSection("#contact");
                    setIsMenuOpen(false);
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hire Me ⚡
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Status Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          transformOrigin: "left",
          width: `${(navItems.findIndex(item => item.section === activeSection) + 1) / navItems.length * 100}%`
        }}
      />
    </motion.nav>
  );
};

export default Navbar;