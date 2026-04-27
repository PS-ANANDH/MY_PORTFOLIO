import React, { useEffect, useCallback, useRef, useState, memo } from 'react';
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
  const [isMuted, setIsMuted] = useState(false);
  const [bgmStarted, setBgmStarted] = useState(false);
  const audioRef = useRef(null);

  // Use Framer Motion's built-in scroll tracking — no JS setInterval needed
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  // BGM autoplay — tries immediately, falls back to first user interaction
  useEffect(() => {
    const audio = new Audio('/song.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const tryPlay = () => {
      audio.play()
        .then(() => setBgmStarted(true))
        .catch(() => {});
    };

    tryPlay();

    // Fallback: play on first interaction if autoplay was blocked
    const onFirstInteraction = () => {
      if (!bgmStarted) {
        audio.play()
          .then(() => setBgmStarted(true))
          .catch(() => {});
      }
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
    };

    window.addEventListener('click', onFirstInteraction);
    window.addEventListener('keydown', onFirstInteraction);
    window.addEventListener('touchstart', onFirstInteraction);

    return () => {
      audio.pause();
      audio.src = '';
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
    };
  }, []);

  // Sync mute state with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => setIsMuted(prev => !prev), []);

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

      {/* Floating BGM Mute Button */}
      <motion.button
        className="bgm-btn"
        onClick={toggleMute}
        title={isMuted ? 'Unmute BGM' : 'Mute BGM'}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMuted ? '🔇' : '🎵'}
      </motion.button>

      <AnimatePresence>
        {showScrollTop && <ScrollTopBtn onClick={scrollToTop} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
