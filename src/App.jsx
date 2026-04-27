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
  // Use a ref to track started state without stale closures inside event handlers
  const bgmStartedRef = useRef(false);

  // Use Framer Motion's built-in scroll tracking — no JS setInterval needed
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  // BGM setup — mobile-safe audio unlock pattern
  useEffect(() => {
    const audio = new Audio('/song.mp3');
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = 'auto';
    audioRef.current = audio;

    const startAudio = () => {
      if (bgmStartedRef.current) return;
      // play() must be called synchronously in a gesture handler to work on mobile
      audio.play()
        .then(() => {
          bgmStartedRef.current = true;
          setBgmStarted(true);
        })
        .catch(() => {});
    };

    // 1. Try autoplay immediately (works on desktop)
    startAudio();

    // 2. Mobile fallback: unlock on ANY first user gesture
    //    { once: true } auto-removes the listener after first fire
    const gestureOpts = { once: true, passive: true };
    document.addEventListener('touchstart', startAudio, gestureOpts);
    document.addEventListener('touchend',   startAudio, gestureOpts);
    document.addEventListener('click',      startAudio, gestureOpts);
    document.addEventListener('keydown',    startAudio, gestureOpts);

    return () => {
      audio.pause();
      audio.src = '';
      // Clean up in case { once } hasn't fired yet
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('touchend',   startAudio);
      document.removeEventListener('click',      startAudio);
      document.removeEventListener('keydown',    startAudio);
    };
  }, []);

  // Sync mute state with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // On mobile the 🎵 button IS the first gesture — start + toggle mute
  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!bgmStartedRef.current) {
      // First tap on mobile: start the audio synchronously inside this gesture
      audio.play()
        .then(() => {
          bgmStartedRef.current = true;
          setBgmStarted(true);
        })
        .catch(() => {});
    } else {
      setIsMuted(prev => !prev);
    }
  }, []);

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

      {/* Floating BGM Button — tap to start on mobile, then mute/unmute */}
      <motion.button
        className={`bgm-btn${!bgmStarted ? ' bgm-btn--idle' : ''}`}
        onClick={toggleMute}
        title={!bgmStarted ? 'Tap to play BGM' : isMuted ? 'Unmute BGM' : 'Mute BGM'}
        aria-label={!bgmStarted ? 'Tap to start background music' : isMuted ? 'Unmute background music' : 'Mute background music'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        {!bgmStarted ? '▶' : isMuted ? '🔇' : '🎵'}
      </motion.button>

      <AnimatePresence>
        {showScrollTop && <ScrollTopBtn onClick={scrollToTop} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
