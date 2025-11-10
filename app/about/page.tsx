"use client";
import { motion } from "framer-motion";
import React from 'react'; // Import React for the type definition

// Data for the Skills Section
const skills = [
  { name: "React / Next.js", color: "text-sky-600", icon: "M13 10V3L4 14H11V21L20 10H13Z" },
  { name: "Vue.js", color: "text-emerald-600", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { name: "Node.js / Express", color: "text-green-600", icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { name: "Tailwind CSS", color: "text-cyan-600", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4M7 7a5 5 0 0110 0v1a3 3 0 003 3h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V11a2 2 0 012-2h1a3 3 0 003-3V7z" },
  { name: "MongoDB / MySQL", color: "text-indigo-600", icon: "M4 7v10m-2 2h20m0-14H4" },
  { name: "Framer Motion", color: "text-pink-600", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
];

// Animation variants for staggered section appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animation variants for individual section cards
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    } 
  },
};

// --- Main About Component ---
export default function About() {
  const profileImageUrl = "https://placehold.co/160x160/3b82f6/ffffff?text=Deepak+S";

  // FIX: Type the event handler correctly
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      // Assert that e.target is an HTMLImageElement to access .onerror and .src
      const target = e.target as HTMLImageElement;
      
      // Stop infinite loop by removing the handler
      target.onerror = null; 
      
      // Set the fallback image source
      target.src = "https://placehold.co/160x160/3b82f6/ffffff?text=DS";
  };

  return (
    <main className="min-h-screen bg-gray-50 font-inter">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white opacity-70"></div>
      
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Profile and Intro Block */}
        <motion.div
          className="text-center mb-16 p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-40 h-40 mx-auto -mt-20 mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src={profileImageUrl}
              alt="Deepak Singh Profile"
              className="w-full h-full object-cover"
              // Applied the fixed handler
              onError={handleImageError}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl font-extrabold text-blue-800 mb-3"
          >
            Deepak Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl font-medium text-blue-600 mb-6"
          >
            Full Stack Developer | Architecting Modern Web Applications
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700"
          >
            I thrive on transforming complex challenges into clean, efficient code. My focus is on building scalable, responsive, and delightful user experiences using cutting-edge frontend and backend technologies.
          </motion.p>
        </motion.div>

        {/* Core Skills Section */}
        <motion.div 
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
            variants={itemVariants}
          >
            Core Technology Stack
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-3">
                  <svg className={`w-6 h-6 ${skill.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={skill.icon}></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Main Content Sections (Staggered) */}
        <motion.div
          className="mt-16 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Journey Section */}
          <motion.div
            variants={itemVariants}
            className="p-10 bg-white rounded-2xl shadow-xl border-t-8 border-blue-500"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              My Journey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              My journey into programming started with curiosity — how do websites
              really work? That question led me to explore web technologies, and since
              then, I’ve built everything from small projects to scalable web apps.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I specialize in building full-stack applications using{" "}
              <b className="text-blue-600">React/Vue.js</b> for the frontend, and <b className="text-blue-600">Node.js + Express</b> for
              the backend — often with <b className="text-blue-600">MySQL</b> or <b className="text-blue-600">MongoDB</b> for data
              management. I believe in writing clean, reusable, and performant code.
            </p>
          </motion.div>

          {/* Current Work */}
          <motion.div
            variants={itemVariants}
            className="p-10 bg-white rounded-2xl shadow-xl border-t-8 border-green-500"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              What I’m Working On
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Currently, I’m focusing on mastering <b className="text-green-600">Next.js</b> for server-side
              rendering and SEO-friendly web apps. I’m also sharpening my UI/UX design
              skills with <b className="text-green-600">Tailwind CSS</b> and adding animations through{" "}
              <b className="text-green-600">Framer Motion</b> to make websites more dynamic and engaging.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outside of coding, I enjoy exploring tech communities, learning from
              others, and helping aspiring developers grow.
            </p>
          </motion.div>
        </motion.div>


        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center p-8 bg-blue-700 rounded-2xl shadow-2xl text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Let’s Connect
          </h2>
          <p className="text-blue-200 leading-relaxed mb-6 max-w-2xl mx-auto">
            I love connecting with other developers and sharing ideas. If you'd like
            to collaborate or just say hi, feel free to reach out — let’s build something awesome together!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-[1.05]"
          >
            Get in Touch
          </a>
        </motion.div>

      </section>
    </main>
  );
}