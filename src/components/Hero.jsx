import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const backgroundRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

 useEffect(() => {
  const handleMouseMove = (e) => {
    if (!backgroundRef.current) return;
    
    const rect = backgroundRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    backgroundRef.current.style.setProperty('--mouse-x', `${x}%`);
    backgroundRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  // Add the glow class
  if (backgroundRef.current) {
    backgroundRef.current.classList.add('section-glow-effect');
  }

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Elements - Fixed blur issues */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-1000 ease-out"
       
      >
        {/* Binary Stream Background */}
        <div className="absolute inset-0 bg-black">
          <div className="binary-stream"></div>
          <div className="circuit-grid"></div>
        </div>

        {/* Floating Code Snippets */}
        <motion.div
          className="floating-code code-1"
          animate={{
            y: [0, -40, 0],
            rotateZ: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-keyword">class</div>
          <div className="code-function"> Developer</div> {'{'}
          <div className="code-comment">// Passionate coder</div>
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
            y: [0, 30, 0],
            rotateZ: [0, -4, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-comment">/* バックエンドマスター */</div>
          <div className="code-keyword">public</div> 
          <div className="code-function">void</div> 
          <div className="code-function">code</div>() {'{'}
          <div className="code-comment">// 情熱を込めて</div>
          <div className="code-function">System.out.println</div>(
          <div className="code-string">"Hello World! 🚀"</div>);
          {'}'}
        </motion.div>

        <motion.div
          className="floating-code code-3"
          animate={{
            y: [0, -25, 0],
            rotateZ: [0, 3, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-keyword">function</div>
          <div className="code-function"> createMagic</div>() {'{'}
          <div className="code-keyword">return</div> 
          <div className="code-string">"Innovation + Code"</div>;
          {'}'}
        </motion.div>
      </div>

      {/* Data Particles */}
      <div className="data-particle particle-1"></div>
      <div className="data-particle particle-2"></div>
      <div className="data-particle particle-3"></div>
      <div className="data-particle particle-4"></div>
      <div className="data-particle particle-5"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 initial-load-fix">
       

        {/* Main Hero Text with Profile Photo */}
<motion.div
  className="mb-8 text-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
>
  {/* Profile Photo */}
  <motion.img
    src="/images/Me.jpeg"
    alt="Selva Anandh"
    className="profile-photo"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
  />
  
  <h1 className="text-green-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
    SELVA ANANDH
  </h1>
  <motion.div
    className="w-24 h-1 bg-green-400 mx-auto mb-6 mt-4"
    initial={{ width: 0 }}
    animate={{ width: 96 }}
    transition={{ delay: 1.2, duration: 1 }}
  />
</motion.div>
        {/* Subtitle */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <h2 className="text-green-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer
          </h2>
          <p className="text-green-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting robust backend solutions with modern technologies and clean architecture.
            Passionate about building scalable systems that make a difference.
          </p>
        </motion.div>
      </div>

      {/* Accent Animations */}
      <motion.div
        className="absolute top-1/4 left-10 w-1 h-20 bg-green-400 rounded-full"
        animate={{
          scaleY: [1, 2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-16 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1
        }}
      />

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-32 left-20 w-12 h-12 border-2 border-green-400 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.6, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-24 w-10 h-10 border-2 border-blue-400 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Binary Counter */}
      <motion.div
        className="absolute top-8 right-8 font-mono text-green-600 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          01001000 01100101 01101100
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;