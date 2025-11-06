"use client";
import { motion } from "framer-motion";

// Variants for the form card
const formVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 10,
      delay: 0.4 
    } 
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section (Consistent Header Style) */}
      <div className="bg-blue-700 pt-24 pb-16 px-4 sm:px-6 shadow-xl">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold mb-4 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              Get In Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-blue-200 text-xl max-w-3xl mx-auto"
          >
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
        </div>
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Two-Column Layout (Info on Left, Form on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:pt-16"
            >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Connect with Me
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Whether you're looking to start a new project, need a technical consultation, or just want to chat about the latest web trends, don't hesitate to reach out. I'll get back to you as soon as possible!
                </p>

                <div className="space-y-6">
                    {/* Email Block */}
                    <div className="flex items-center space-x-4">
                        <motion.div
                            className="p-3 rounded-full bg-blue-100 text-blue-600"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </motion.div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Email Address</p>
                            <p className="text-lg font-medium text-gray-800">deepak.singh@example.com</p>
                        </div>
                    </div>

                    {/* Location Block */}
                    <div className="flex items-center space-x-4">
                        <motion.div
                            className="p-3 rounded-full bg-blue-100 text-blue-600"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </motion.div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Location</p>
                            <p className="text-lg font-medium text-gray-800">New Delhi, India</p>
                        </div>
                    </div>
                </div>

            </motion.div>

            {/* Contact Form (Animated Card) */}
            <motion.div
                variants={formVariants}
                initial="hidden"
                animate="visible"
            >
                <form className="bg-white p-8 md:p-10 shadow-2xl rounded-xl space-y-6 border border-gray-200">
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Send a Message</h3>
                    
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-5 py-3 focus:outline-none focus:border-blue-500 transition duration-300 placeholder-gray-500 resize-none"
                    />
                    
                    <motion.button
                        type="submit"
                        className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </motion.button>
                </form>
            </motion.div>
        </div>
      </section>
    </main>
  );
}