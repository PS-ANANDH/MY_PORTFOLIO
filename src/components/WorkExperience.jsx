import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
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
  const experiences = [
    {
      period: "Jan 2025 – Mar 2025",
      title: "Python AI/ML Intern",
      company: "Prog-Tec Company",
    
      points: [
        "Developed a Parkinson's Disease Prediction System using Python, Machine Learning, and Data Science techniques.",
        "Collected and preprocessed medical datasets for accurate training and testing.",
        "Applied algorithms such as SVM, Random Forest, and Logistic Regression for classification and comparison.",
        "Improved prediction accuracy through feature selection and model tuning.",
        "Gained hands-on experience in real-time AI applications and data-driven healthcare analysis."
      ]
    },
    {
      period: "September 2025",
      title: "Full Stack Developer (Project Work)",
      company: "",
     
      points: [
        "Developed an AI-powered resume analyzer using Spring Boot and MySQL for backend.",
        "Integrated HTML, CSS, and JavaScript frontend for resume upload and job match display.",
        "Implemented resume parsing, skill extraction, and automatic job recommendation.",
        "Focused on clean backend logic and responsive UI for smooth user experience."
      ]
    },
    {
      period: "September 2025",
      title: "DineHome – E-Commerce Web Application",
      company: "",
      
      points: [
        "Developed a fully functional e-commerce web application for ordering food and home essentials.",
        "Designed and implemented user authentication, product catalog, cart, and order modules.",
        "Built a robust backend with Spring Boot and maintained relational data using MySQL.",
        "Created a responsive and user-friendly UI using HTML, CSS, and JavaScript.",
        "Integrated RESTful APIs for product and order management with secure session handling.",
        "Focused on clean code, performance optimization, and modern design aesthetics to enhance user experience."
      ]
    }
  ];

  return (
    <section 
      id="work-experience" 
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
          <div className="code-function"> Experience</div> {'{'}
          <div className="code-comment">{"// Professional Journey"}</div>
          <div className="code-keyword">constructor</div>() {'{'}
          <div className="code-keyword">this</div>.
          <div className="code-function">roles</div> = [
          <div className="code-string">"AI/ML Intern"</div>,
          <div className="code-string">"Full Stack Dev"</div>
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
          <div className="code-comment">{"/* 経験と成長 */"}</div>
          <div className="code-keyword">const</div> 
          <div className="code-function"> experience</div> = {'{'}
          <div className="code-string">"learning"</div>: 
          <div className="code-string">"continuous"</div>,
          <div className="code-string">"growth"</div>: 
          <div className="code-string">"exponential"</div>
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
            Work Experience
          </motion.h2>
          
          <motion.p
            className="text-green-300 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            My professional journey and project experiences that shaped my skills
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="terminal-glass p-8 rounded-xl border-2 border-green-400/20 hover:border-green-400 transition-all duration-300 group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                borderColor: "rgb(34 197 94)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Timeline Left */}
                <div className="flex-shrink-0 md:w-48">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-2xl">{exp.icon}</span>
                    <span className="text-green-400 font-mono text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full border border-green-400/30">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Content Right */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-400 mb-2 text-center group-hover:text-blue-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  {exp.company && (
                    <p className="text-cyan-400 font-mono text-lg mb-4 text-center">
                      /{exp.company}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="text-gray-300 text-base leading-relaxed flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (pointIndex * 0.1), duration: 0.5 }}
                      >
                        <span className="text-green-400 mt-1.5 flex-shrink-0">▹</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accent Animations */}
      <motion.div
        className="absolute top-1/4 left-12 w-1 h-24 bg-green-400 rounded-full"
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
        className="absolute bottom-1/3 right-10 w-3 h-3 bg-blue-400 rounded-full"
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

export default WorkExperience;