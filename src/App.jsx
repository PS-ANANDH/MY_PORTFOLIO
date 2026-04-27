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
  const [entered, setEntered] = useState(false); // Controls the entry overlay

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

    return () => {
      audio.pause();
      audio.src = '';
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
        .then(() => { 
          startedRef.current = true; 
          setIsMuted(false); // Make sure it plays out loud, don't instantly mute it!
        })
        .catch(() => {});
    } else {
      // Audio is already active, so just toggle the mute state normally
      setIsMuted(prev => !prev);
    }
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
      
      {/* ── ENTRY SCREEN OVERLAY ── */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(5, 5, 16, 0.9)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="section-title gradient-text"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', textAlign: 'center', padding: '0 20px' }}
            >
              Selva Anandh
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ color: '#94a3b8', fontFamily: "'Fira Code', monospace", marginBottom: '40px', fontSize: '0.9rem' }}
            >
              Interactive Portfolio Experience
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                const audio = audioRef.current;
                if (audio) {
                  audio.play()
                    .then(() => { startedRef.current = true; setIsMuted(false); })
                    .catch(() => {});
                }
                setEntered(true);
              }}
              style={{
                padding: '16px 40px',
                fontSize: '1.1rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: '700',
                background: 'linear-gradient(135deg, #a855f7, #00f5ff)',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 0 30px rgba(168,85,247,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              Enter Experience <span>🎵</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

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
