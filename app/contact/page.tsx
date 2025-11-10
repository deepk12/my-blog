"use client";
import React, { useState } from "react"; // Ensure React is imported for typing
import { motion, Variants } from "framer-motion"; // Import Variants for framer-motion typing
import { ChangeEvent } from "react"; // Import ChangeEvent for input handler typing

// Variants for the form card
const formVariants: Variants = {
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

// Simple ID generation fallback for the sender_id (to ensure a unique ID without requiring crypto.randomUUID or external libraries)
const generateSimpleId = () => 
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

// Hardcoded ID for the recipient (the blog owner/user who owns the contact form)
const RECIPIENT_USER_ID = "blog_owner_101";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State for tracking submission: 'idle', 'loading', 'success', 'error'
  const [submissionState, setSubmissionState] = useState<"idle" | "loading" | "success" | "error">("idle"); 
  // Unique ID for this session/sender, generated once
  const [senderId] = useState(generateSimpleId); 

  // FIX: Explicitly type the event 'e' as a React ChangeEvent
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionState === "loading") return;

    setSubmissionState("loading");

    const payload = {
      user_id: RECIPIENT_USER_ID, // The ID of the blog owner/recipient
      sender_id: senderId, // Unique ID for the sender's session
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // API call to the specified endpoint
      // NOTE: This assumes you have created an API handler at /app/api/contact/route.ts
      const response = await fetch("/api/contact", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Handle non-200 responses
        const errorData = await response.json().catch(() => ({ message: "Failed to send message due to server error." }));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      console.log("Message sent successfully:", response);
      setSubmissionState("success");
      
      // Reset form data on success
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      // Safely access error message
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      console.error("Submission error:", errorMessage);
      setSubmissionState("error");
    }
  };
  
  const isFormDisabled = submissionState === "loading" || submissionState === "success";

  // Component to render submission status messages
  const StatusMessage = () => {
    switch (submissionState) {
      case "loading":
        return (
          <div className="flex items-center justify-center text-blue-600 font-semibold p-3 rounded-xl bg-blue-50">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </div>
        );
      case "success":
        return (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative">
            <span className="block sm:inline font-semibold">Success!</span> Your message has been sent.
          </div>
        );
      case "error":
        return (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative">
            <span className="block sm:inline font-semibold">Error!</span> Something went wrong. Please try again.
            <button
                type="button"
                onClick={() => setSubmissionState("idle")}
                className="ml-4 text-sm font-semibold underline"
            >
                Dismiss
            </button>
          </div>
        );
      default:
        return null;
    }
  };


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
                <form 
                    className="bg-white p-8 md:p-10 shadow-2xl rounded-xl space-y-6 border border-gray-200"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Send a Message</h3>
                    
                    {/* Status Message Area */}
                    <StatusMessage />

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isFormDisabled}
                        className={`w-full border-2 rounded-lg px-5 py-3 transition duration-300 placeholder-gray-500 ${isFormDisabled ? 'bg-gray-100 text-gray-500 border-gray-100 cursor-not-allowed' : 'border-gray-200 focus:outline-none focus:border-blue-500'}`}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isFormDisabled}
                        className={`w-full border-2 rounded-lg px-5 py-3 transition duration-300 placeholder-gray-500 ${isFormDisabled ? 'bg-gray-100 text-gray-500 border-gray-100 cursor-not-allowed' : 'border-gray-200 focus:outline-none focus:border-blue-500'}`}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isFormDisabled}
                        className={`w-full border-2 rounded-lg px-5 py-3 transition duration-300 placeholder-gray-500 resize-none ${isFormDisabled ? 'bg-gray-100 text-gray-500 border-gray-100 cursor-not-allowed' : 'border-gray-200 focus:outline-none focus:border-blue-500'}`}
                    />
                    
                    <motion.button
                        type="submit"
                        className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold text-lg shadow-md transition duration-300 ${
                            isFormDisabled
                                ? 'bg-gray-400 text-gray-100 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                        whileHover={!isFormDisabled ? { scale: 1.02 } : {}}
                        whileTap={!isFormDisabled ? { scale: 0.98 } : {}}
                        disabled={isFormDisabled}
                    >
                        {submissionState === 'loading' ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Sending...</span>
                            </>
                        ) : submissionState === 'success' ? (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Sent!</span>
                            </>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            </>
                        )}
                    </motion.button>
                </form>
            </motion.div>
        </div>
      </section>
    </main>
  );
}