import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Certifications = () => {
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

  const certificationsData = [
    {
      title: "Java SE – EE",
      issuer: "G Tech Academy",
      location: "Madurai, India",
      period: "Feb 2025 – May 2025",
      
    },
    {
      title: "Python AI/ML Internship",
      issuer: "Prog-Tec Company",
      location: "",
      period: "Jan 2025 – Mar 2025",
     
    },
    {
      title: "AI-Based Resume Analyzer Project Completion",
      issuer: "Self Project",
      location: "",
      period: "2025",
      
    }
  ];

  return (
    <section 
      id="certifications" 
      className="relative min-h-screen overflow-hidden bg-black py-20"
    >
      {/* Background Elements */}
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
            y: [0, -25, 0],
            rotateZ: [0, 3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-keyword">class</div>
          <div className="code-function"> Certifications</div> {'{'}
          <div className="code-comment">{"// Skills Validation"}</div>
          <div className="code-keyword">constructor</div>() {'{'}
          <div className="code-keyword">this</div>.
          <div className="code-function">certs</div> = [
          <div className="code-string">"Java"</div>,
          <div className="code-string">"AI/ML"</div>
          ];
          {'}'}
        </motion.div>

        <motion.div
          className="floating-code code-2"
          animate={{
            y: [0, 20, 0],
            rotateZ: [0, -2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-comment">/* 認定と証明 */</div>
          <div className="code-keyword">const</div> 
          <div className="code-function"> achievements</div> = {'{'}
          <div className="code-string">"learning"</div>: 
          <div className="code-string">"validated"</div>,
          <div className="code-string">"skills"</div>: 
          <div className="code-string">"certified"</div>
          {'}'};
        </motion.div>
      </div>

      {/* Data Particles */}
      <div className="data-particle particle-1"></div>
      <div className="data-particle particle-2"></div>
      <div className="data-particle particle-3"></div>
      <div className="data-particle particle-4"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 initial-load-fix">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 cyber-text anime-glow section-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            CERTIFICATIONS
          </motion.h2>
          
          <motion.p
            className="text-green-300 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Validated skills and professional certifications
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="terminal-glass p-6 rounded-xl border-2 border-green-400/20 hover:border-green-400 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                borderColor: "rgb(34 197 94)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold text-green-400 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-cyan-400 font-mono text-sm">
                    {cert.issuer}
                  </p>
                  {cert.location && (
                    <p className="text-gray-300 text-xs">
                      {cert.location}
                    </p>
                  )}
                  <div className="mt-3">
                    <span className="text-green-400 font-mono text-xs bg-green-400/10 px-2 py-1 rounded-full border border-green-400/30">
                      {cert.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accent Animations */}
      <motion.div
        className="absolute top-1/4 right-12 w-1 h-24 bg-green-400 rounded-full"
        animate={{
          scaleY: [1, 2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-10 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1
        }}
      />
    </section>
  );
};

export default Certifications;