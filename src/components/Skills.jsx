import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const backgroundRef = useRef(null);

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

  const skills = [
    "Java", "Spring Boot",  "MySQL", "HTML5", "CSS3",
    "REST APIs","Git"
  ];

  return (
    <section 
      id="skills" 
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center py-20"
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

        {/* Floating Code Snippets */}
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
          <div className="code-keyword">const</div>
          <div className="code-function"> skills</div> = [
          <div className="code-string">"Java"</div>,
          <div className="code-string">"Spring Boot"</div>,
          <div className="code-string">"React"</div>
          ];
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center initial-load-fix">
        {/* Section Header */}
        <motion.h2
          className="text-6xl md:text-8xl font-bold mb-12 cyber-text anime-glow section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Skills
        </motion.h2>

        {/* Skills Display - Using the exact same effects */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="terminal-glass p-4 text-center hover-glow cursor-pointer group"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(0, 255, 136, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
              <span className="text-green-400 font-mono text-sm group-hover:neon-glow transition-all duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-green-300 text-xl mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Technologies and tools I use to build amazing applications
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;