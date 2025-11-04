import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const backgroundRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xgvpjdnl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert("Message sent successfully! ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section 
      id="contact" 
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4"
    >
      {/* Background Elements - Fixed blur issues */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-600 ease-out"
        
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
          <div className="code-keyword">function</div>
          <div className="code-function"> sendMessage</div>() {'{'}
          <div className="code-comment">// メッセージを送信</div>
          <div className="code-keyword">return</div> 
          <div className="code-string">"Success! 🎉"</div>;
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
          <div className="code-comment">/* 連絡を取ろう */</div>
          <div className="code-keyword">const</div> 
          <div className="code-function"> contact</div> = {'{'}
          <div className="code-string">email</div>: 
          <div className="code-string">"hello@dev.com"</div>,
          <div className="code-string">"status"</div>: 
          <div className="code-string">"⚡ Available"</div>
          {'}'};
        </motion.div>
      </div>

    
      {/* Data Particles */}
      <div className="data-particle particle-1"></div>
      <div className="data-particle particle-2"></div>
      <div className="data-particle particle-3"></div>
      <div className="data-particle particle-4"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto initial-load-fix">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contact Info */}
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 cyber-text anime-glow section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let's Talk
          </motion.h2>
          
          <motion.p
            className="text-green-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Ready to bring your ideas to life? Let's create something amazing together.
          </motion.p>

          {/* Contact Details */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-green-400">
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono">Available for freelance work</span>
            </div>
            <div className="flex items-center gap-3 text-blue-400">
              <motion.div 
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              />
              <span className="font-mono">Quick response guaranteed</span>
            </div>
            <div className="flex items-center gap-3 text-pink-400">
              <motion.div 
                className="w-2 h-2 bg-pink-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              />
              <span className="font-mono">24/7 Code enthusiast</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1 max-w-lg w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="terminal-glass p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="contact-label">
                  $ name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  value={form.name}
                  onChange={handleChange}
                  className="contact-input w-full mb-6"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="contact-label">
                  $ email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  className="contact-input w-full mb-6"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1}}
              >
                <label className="contact-label">
                  $ message
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={handleChange}
                  className="contact-input w-full mb-8 resize-none"
                  rows="5"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full anime-button text-lg font-mono relative overflow-hidden group"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <motion.span
                  className="relative z-10"
                  animate={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Sending
                      </motion.span>
                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        ...
                      </motion.span>
                    </>
                  ) : (
                    "Send Message ⚡"
                  )}
                </motion.span>
                
                {/* Loading Animation */}
                {isSubmitting && (
                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="terminal-loader w-6 h-6"></div>
                  </motion.div>
                )}
              </motion.button>

              {/* Form Status */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-green-600 font-mono text-sm">
                  <span className="text-green-400"></span>
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Accent Animations */}
      <motion.div
        className="absolute bottom-20 left-10 w-1 h-24 bg-green-400 rounded-full"
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
        className="absolute top-1/3 right-16 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1
        }}
      />

      {/* Additional Code Elements */}
      <motion.div
        className="absolute top-20 left-20 w-8 h-8 border-2 border-green-400 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.4, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-20 w-6 h-6 border-2 border-blue-400 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Contact;