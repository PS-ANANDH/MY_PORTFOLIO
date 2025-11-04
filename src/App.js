import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills'; 
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.02
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <motion.div
          key="app-content"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >{/* Navigation */}
<Navbar />

{/* Fixed Hire Me Button - Outside Navbar */}
<div className="navbar-hire-button">
  <motion.button
    className="nav-button px-8 py-4 cursor-pointer text-lg font-mono font-bold transition-all duration-300 text-center min-w-[140px] nav-button-inactive"
    onClick={() => {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
    whileHover={{ 
      scale: 1.1,
      y: -2
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    Hire Me ⚡
  </motion.button>
</div>
          
          {/* Main Sections */}
          <main>
            <Hero />
            <About />
            <Education/>
            <Certifications/>
            <Skills/>
            <WorkExperience />
            <Projects />
            <Contact />
          </main>
          
          {/* Footer */}
          <Footer />

          {/* Global Background Elements */}
          <div className="fixed inset-0 pointer-events-none -z-10">
            {/* Global Binary Stream */}
            <div className="absolute inset-0">
              <div className="binary-stream"></div>
              <div className="circuit-grid"></div>
            </div>

            {/* Global Data Particles */}
            <div className="data-particle particle-1"></div>
            <div className="data-particle particle-2"></div>
            <div className="data-particle particle-3"></div>
            <div className="data-particle particle-4"></div>
            <div className="data-particle particle-5"></div>
            <div className="data-particle particle-6"></div>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400 origin-left z-50"
               style={{ transform: 'scaleX(0)' }}
               id="scroll-progress" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;