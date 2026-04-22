import React, { useEffect, useCallback, useRef, memo } from 'react';
import { motion, AnimatePresence, useSpring, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Memoized scroll-to-top button — only re-renders when visibility changes
const ScrollTopBtn = memo(({ onClick }) => (
  <motion.button
    className="scroll-top-btn"
    onClick={onClick}
    initial={{ opacity: 0, scale: 0, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0, y: 20 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label="Scroll to top"
  >
    ↑
  </motion.button>
));

function App() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // Use Framer Motion's built-in scroll tracking — no JS setInterval needed
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  // Debounced scroll listener — passive, no rerender per pixel
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ position: 'relative', background: '#050510', minHeight: '100vh' }}>
      {/* Static background — CSS-only, no JS animation cost */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grid-bg" />
      <div className="noise-overlay" />

      {/* Scroll Progress Bar — driven by Framer spring, GPU only */}
      <motion.div className="scroll-progress" style={{ scaleX, transformOrigin: 'left' }} />

      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop && <ScrollTopBtn onClick={scrollToTop} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
