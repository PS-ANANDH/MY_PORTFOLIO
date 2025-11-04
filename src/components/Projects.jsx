import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const backgroundRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "DineHome E-Commerce Web Application",
      description: "Built a responsive e-commerce platform for online food and home product ordering. Included modules for login, product listing, cart, and order management with RESTful APIs.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API","HTML","CSS"],
      category: "fullstack",
      github: "#",
      demo: "#",
      image: "/images/DineHome.jpeg",
      status: "completed"
    },
    {
      id: 2,
      title: "AI-Based Resume Analyzer with Job Matching System",
      description: "Developed an AI-powered web app that analyzes resumes and matches candidate skills with suitable job openings. Integrated resume parsing, skill extraction, and RESTful APIs for job recommendations. API for task management with real-time updates, user roles, and advanced filtering capabilities.",
      technologies: ["Java", "Spring Boot", "MySql", "html", "css","javascript"],
      category: "fullstack",
      github: "#",
      demo: "#",
      image: "/images/CvAnalyZer.jpeg",
      status: "completed"
    },
    {
      id: 3,
      title: "AI-CodeFixer chatBot",
      description: "Detects bugs in code automatically Suggests fixes in ral-time Works across multiple programming languages Easy-to-use interface for student and  developers",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
      category: "fullstack",
      github: "#",
      demo: "#",
      image: "/images/AiCodefixer.jpeg",
      status: "completed"
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "backend", name: "Backend" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full Stack" },
    { id: "devops", name: "DevOps" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "text-green-400 bg-green-400/10 border-green-400";
      case "in-progress": return "text-yellow-400 bg-yellow-400/10 border-yellow-400";
      case "planned": return "text-blue-400 bg-blue-400/10 border-blue-400";
      default: return "text-gray-400 bg-gray-400/10 border-gray-400";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planned": return "Planned";
      default: return "Unknown";
    }
  };

  // Function to check if project has background image
  const hasBackgroundImage = (project) => {
    return project.title.includes('DineHome') || 
           project.title.includes('Resume Analyzer') || 
           project.title.includes('CodeFixer');
  };

  // Function to get background image path
  const getBackgroundImage = (project) => {
    if (project.title.includes('DineHome')) return "url('/images/DineHome.jpeg')";
    if (project.title.includes('Resume Analyzer')) return "url('/images/CvAnalyZer.jpeg')";
    if (project.title.includes('CodeFixer')) return "url('/images/AiCodefixer.jpeg')";
    return "";
    
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen overflow-hidden bg-black py-20"
    >
      {/* Background Elements - Fixed blur issues */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        
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
            y: [0, -35, 0],
            rotateZ: [0, 4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-keyword">class</div>
          <div className="code-function"> Project</div> {'{'}
          <div className="code-comment">{"// プロジェクト詳細"}</div>
          <div className="code-keyword">constructor</div>() {'{'}
          <div className="code-keyword">this</div>.
          <div className="code-function">tech</div> = [
          <div className="code-string">"Java"</div>,
          <div className="code-string">"Spring"</div>
          ];
          {'}'}
        </motion.div>

        <motion.div
          className="floating-code code-2"
          animate={{
            y: [0, 28, 0],
            rotateZ: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="code-comment">{"/* コードを書く情熱 */"}</div>
          <div className="code-keyword">public</div> 
          <div className="code-function">void</div> 
          <div className="code-function">develop</div>() {'{'}
          <div className="code-comment">{"// 創造性と技術"}</div>
          <div className="code-function">System.out.println</div>(
          <div className="code-string">"Building amazing projects! 💻"</div>);
          {'}'}
        </motion.div>
      </div>

      {/* Data Particles */}
      <div className="data-particle particle-1"></div>
      <div className="data-particle particle-2"></div>
      <div className="data-particle particle-3"></div>
      <div className="data-particle particle-4"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 initial-load-fix">
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
            My Projects
          </motion.h2>
          
          <motion.p
            className="text-green-300 text-xl max-w-2xl mx-auto typewriter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            A collection of projects that showcase my skills in backend development, 
            system architecture, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 border-2 ${
                activeFilter === filter.id
                  ? "text-blue-400 border-blue-400 bg-blue-400/10 hover-glow"
                  : "text-green-400 border-green-400/30 hover:border-green-400 hover:bg-green-400/5"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`terminal-glass p-6 rounded-xl border-2 border-green-400/20 hover:border-green-400 transition-all duration-300 group cursor-pointer ${
                hasBackgroundImage(project) ? 'project-with-bg' : ''
              }`}
              style={
                hasBackgroundImage(project) 
                  ? { 
                      backgroundImage: getBackgroundImage(project),
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      position: 'relative'
                    } 
                  : {}
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                borderColor: "rgb(34 197 94)",
                transition: { duration: 0.2 }
              }}
            >
              {/* Dark overlay for better text readability on background image projects */}
              {hasBackgroundImage(project) && (
                <div className="absolute inset-0 bg-black/70 rounded-xl z-0" />
              )}
              
              {/* Project Image - Only for projects without background images */}
              {!hasBackgroundImage(project) && (
                <motion.div
                  className="relative overflow-hidden rounded-lg mb-4 bg-gray-800 h-48 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 group-hover:from-green-400/20 group-hover:to-blue-400/20 transition-all duration-500" />
                  
                  {/* Status Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-mono ${getStatusColor(project.status)}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  >
                    {getStatusText(project.status)}
                  </motion.div>

                  {/* Placeholder Icon */}
                  <motion.div
                    className="text-4xl text-green-400"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.category === 'backend' && '⚙️'}
                    {project.category === 'frontend' && '🎨'}
                    {project.category === 'fullstack' && '🌐'}
                    {project.category === 'devops' && '🚀'}
                  </motion.div>
                </motion.div>
              )}

              {/* Status Badge for projects with background images */}
              {hasBackgroundImage(project) && (
                <motion.div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-mono ${getStatusColor(project.status)} z-10`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  {getStatusText(project.status)}
                </motion.div>
              )}

              {/* Project Content */}
              <div className={`space-y-4 relative z-10 ${hasBackgroundImage(project) ? 'text-white' : ''}`}>
                {/* Title */}
                <motion.h3
                  className={`text-xl font-bold group-hover:text-blue-400 transition-colors duration-300 ${
                    hasBackgroundImage(project) ? 'text-white' : 'text-green-400'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className={`text-sm leading-relaxed ${
                    hasBackgroundImage(project) ? 'text-gray-200' : 'text-green-300'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={`px-3 py-1 border rounded-lg text-xs font-mono hover-glow ${
                        hasBackgroundImage(project) 
                          ? 'bg-white/20 border-white/30 text-white' 
                          : 'bg-black border-green-400/30 text-green-400'
                      }`}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: hasBackgroundImage(project) 
                          ? "rgba(255, 255, 255, 0.3)" 
                          : "rgba(0, 255, 136, 0.1)" 
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.1 + techIndex * 0.05, duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-32 right-20 w-8 h-8 border-2 border-green-400 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.4, 1],
        }}
        transition={{
          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-24 w-6 h-6 border-2 border-blue-400 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Projects;