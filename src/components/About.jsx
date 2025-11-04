import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const backgroundRef = useRef(null);
useEffect(() => {
  const handleMouseMove = (e) => {
    if (!backgroundRef.current) return;
    
    const { clientX, clientY } = e;
    const rect = backgroundRef.current.getBoundingClientRect();
    
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    
    // Set CSS variables for lighting effect
    backgroundRef.current.style.setProperty('--mouse-x', `${x}%`);
    backgroundRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  // Add lighting class to background container
  if (backgroundRef.current) {
    backgroundRef.current.classList.add('section-lighting');
  }

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  return (
    <section 
      id="about" 
      className="text-green-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
    >
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-800 ease-out"
       
      >
        {/* Binary Stream Background */}
        <div className="absolute inset-0 bg-black">
          <div className="binary-stream"></div>
          <div className="circuit-grid"></div>
        </div>

        {/* Floating Code Snippets - Keep but with proper z-index */}
        <motion.div
          className="floating-code code-1"
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-keyword">class</div>
          <div className="code-function"> Developer</div> {'{'}
          <div className="code-comment">{'// Passionate coder'}</div>
          <div className="code-keyword">constructor</div>() {'{'}
          <div className="code-keyword">this</div>.
          <div className="code-function">skills</div> = [
          <div className="code-string">"Java"</div>,
          <div className="code-string">"Spring Boot"</div>
          ];
          {'}'}
        </motion.div>

        <motion.div
          className="floating-code code-2"
          animate={{
            y: [0, 15, 0],
            rotateZ: [0, -1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-comment">{'/* バックエンドマスター */'}</div>
          <div className="code-keyword">public</div> 
          <div className="code-function">void</div> 
          <div className="code-function">code</div>() {'{'}
          <div className="code-comment">{'// 情熱を込めて'}</div>
          <div className="code-function">System.out.println</div>(
          <div className="code-string">"Hello World! 🚀"</div>);
          {'}'}
        </motion.div>
      </div>

      {/* Data Particles */}
      <div className="data-particle particle-1"></div>
      <div className="data-particle particle-2"></div>
      <div className="data-particle particle-3"></div>

      {/* Main Content - Increased z-index to stay above floating boxes */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center initial-load-fix">
        <motion.h2
          className="text-7xl md:text-8xl font-bold mb-8 cyber-text anime-glow about-me-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        {/* Paragraph Container - Removed cyber-text class */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <motion.p
            className="text-white text-lg md:text-lg leading-relaxed font-light opacity-90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            I love building clean, fast, and scalable web applications. I turn complex backend logic into smooth user experiences using Spring Boot, MySQL, and modern web technologies. I believe great code isn't just written — it's designed to solve real problems.
          </motion.p>
        </motion.div>
      </div>

      {/* Additional Floating Elements */}
      <motion.div
        className="text-green-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-20 w-4 h-4 border-2 border-blue-400 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default About;