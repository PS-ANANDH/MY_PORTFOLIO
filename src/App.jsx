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

  // Refs — no stale closures, no re-render overhead
  const audioRef      = useRef(null);
  const startedRef    = useRef(false);   // has audio.play() succeeded?
  const listenersRef  = useRef([]);      // keep track of gesture listeners to clean up

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    // ── Create audio element ──────────────────────────────────────
    const audio = new Audio('/song.mp3');
    audio.loop    = true;
    audio.volume  = 0.35;
    audio.preload = 'auto';
    audioRef.current = audio;

    // ── Core start function ───────────────────────────────────────
    // Must be called synchronously inside a trusted gesture on mobile.
    const startAudio = () => {
      if (startedRef.current) return;
      audio.play()
        .then(() => { startedRef.current = true; })
        .catch(() => {
          // play() rejected — browser still blocking, wait for next gesture
        });
    };

    // ── 1. Try immediate autoplay (desktop Chrome/Firefox) ────────
    startAudio();

    // ── 2. Mobile unlock: register on every trusted gesture type ──
    // touchstart fires before click, so it catches scroll-begins too.
    // { once: true } auto-removes each listener after it fires once.
    const events = ['touchstart', 'touchend', 'pointerdown', 'click', 'keydown'];
    const opts   = { once: true, passive: true };

    events.forEach(evt => {
      document.addEventListener(evt, startAudio, opts);
    });

    // Store for cleanup (in case component unmounts before any gesture)
    listenersRef.current = events;

    return () => {
      audio.pause();
      audio.src = '';
      events.forEach(evt => document.removeEventListener(evt, startAudio));
    };
  }, []);

  // Sync mute with audio element
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted;
  }, [isMuted]);

  // Toggle mute — if audio hasn't started yet (mobile), this tap starts it too
  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!startedRef.current) {
      // This click/tap IS the trusted gesture — start audio right here
      audio.play()
        .then(() => { startedRef.current = true; })
        .catch(() => {});
    }
    // Always toggle mute regardless (so button feels instant)
    setIsMuted(prev => !prev);
  }, []);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
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

      {/* Scroll Progress Bar */}
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

      {/* BGM Mute / Unmute Button — always 🎵 or 🔇, never a play button */}
      <motion.button
        className="bgm-btn"
        onClick={toggleMute}
        title={isMuted ? 'Unmute BGM' : 'Mute BGM'}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
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
