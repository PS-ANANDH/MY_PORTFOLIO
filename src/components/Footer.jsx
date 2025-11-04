import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

const Footer = () => {
  const backgroundRef = useRef(null);
   const [showMessage, setShowMessage] = useState(false);

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

  return (
    <motion.footer
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Elements - Fixed blur issues */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-800 ease-out"
        
      >
        {/* Binary Stream & Circuit Grid */}
        <div className="absolute inset-0 bg-black">
          <div className="binary-stream"></div>
          <div className="circuit-grid"></div>
        </div>

        {/* Floating Code Snippets */}
        <motion.div
          className="floating-code code-1"
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 4, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-comment">{"/* 最後のメッセージ */"}</div>
          <div className="code-keyword">export</div> 
          <div className="code-keyword">default</div> 
          <div className="code-function"> Footer</div>;
          <div className="code-comment">{"// さようなら 👋"}</div>
        </motion.div>

        <motion.div
          className="floating-code code-2"
          animate={{
            y: [0, 25, 0],
            rotateZ: [0, -3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-keyword">function</div>
          <div className="code-function"> connect</div>() {'{'}
          <div className="code-keyword">return</div> 
          <div className="code-string">"Let's code together! 🚀"</div>;
          {'}'}
        </motion.div>

        <motion.div
          className="floating-code code-3"
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-comment">{"// また会う日まで"}</div>
          <div className="code-keyword">const</div> 
          <div className="code-function"> goodbye</div> = 
          <div className="code-string">"See you next project! 💫"</div>;
        </motion.div>
      </div>

      {/* Data Particles */}
      <div className="data-particle particle-1"></div>
      <div className="data-particle particle-2"></div>
      <div className="data-particle particle-3"></div>
      <div className="data-particle particle-4"></div>
      <div className="data-particle particle-5"></div>
      <div className="data-particle particle-6"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="terminal-glass p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Hero Text */}
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 cyber-text anime-glow section-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let's Connect
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            className="text-green-300 text-xl mb-8 max-w-2xl mx-auto typewriter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Ready to start your next project? Let's create something extraordinary together.
          </motion.p>

          {/* Social Links */}
<motion.div
  className="flex justify-center gap-6 mb-10 flex-wrap"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1, duration: 0.6 }}
>
  {[
    { 
      name: 'GitHub', 
      icon: '💻', 
      url: 'https://github.com/PS-ANANDH' 
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://www.linkedin.com/in/selva-anandh-p-a48a67320' 
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: 'https://x.com/PSANANDH6' 
    },
    { 
      name: 'Discord', 
      icon: '🎮', 
      url: 'https://support.discord.com/hc/en-us/profiles/36093442166423' 
    },
    { 
      name: 'Email', 
      icon: '📧', 
      url: 'mailto:selvaanandh8@gmail.com' 
    }
  ].map((platform, index) => (
    <motion.a
      key={platform.name}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
    >
      <div className="terminal-glass px-6 py-3 border-2 border-green-400 hover:border-green-300 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/50">
        <span className="text-green-400 neon-green font-mono text-sm flex items-center gap-2 group-hover:text-green-300 group-hover:neon-glow">
          <span>{platform.icon}</span>
          {platform.name}
        </span>
      </div>
    </motion.a>
  ))}
</motion.div>

          {/* Copyright Text */}
          <motion.div
            className="border-t border-green-400/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            
            
            <motion.p
              className="text-green-600 text-sm mt-2 font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              // Crafted with passion and modern technology
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll to Top */}
        <motion.div
          className="mt-12 back-to-top-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <motion.a
            href="#hero"
            className="group back-to-top-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="terminal-glass px-6 py-3 border-2 border-green-400 hover:border-green-300 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/50">
              <span className="text-green-400 neon-green font-mono text-sm flex items-center justify-center gap-2 group-hover:text-green-300 group-hover:neon-glow">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↑
                </motion.span>
                Back to Top
              </span>
            </div>
          </motion.a>
        </motion.div>
        <motion.p
              className="text-green-400 text-lg font-mono"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              © {new Date().getFullYear()}{" "}
              <span className="neon-cyan font-bold">SELVA ANANDH</span>. 
              {" "}All rights reserved.
            </motion.p>
      </div>

      {/* Accent Animations */}
      <motion.div
        className="absolute bottom-32 left-1/4 w-0.5 h-16 bg-green-400 rounded-full"
        animate={{
          scaleY: [1, 2.5, 1],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 3, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1
        }}
      />

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-40 left-20 w-10 h-10 border-2 border-green-400 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-40 right-24 w-8 h-8 border-2 border-blue-400 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Binary Counter */}
      <motion.div
        className="absolute bottom-8 left-8 font-mono text-green-600 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <motion.div
          animate={{ opacity: [0.1, 0.1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          01000110 01101001 01101110
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;