"use client";
import React from 'react'; // Explicitly import React for typing SyntheticEvent
import { motion, Variants } from "framer-motion"; // Import Variants for framer-motion typing

// --- Interface for Post Data ---
interface PostProps {
  title: string;
  date: string;
  image: string;
}

// --- Internal PostCard Component ---
// This component now handles the presentation and the hover animation for each blog entry.
// FIX: Apply the PostProps interface to the component.
const PostCard = ({ title, date, image }: PostProps) => {
  
  // Define a typed handler for image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; 
    target.src = "https://placehold.co/600x400/3b82f6/ffffff?text=Image+Missing";
  };
    
  return (
    <motion.div
      className="group flex flex-col h-full bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer transition duration-300 transform"
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)", // Blue-tinted shadow on hover
        transition: { duration: 0.3 } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Card Image with transition effect */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          // FIX: Use the typed error handler
          onError={handleImageError}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-blue-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition duration-300">
          {title}
        </h3>
        <a 
          href="#" 
          className="mt-auto text-blue-600 font-medium hover:text-blue-800 transition duration-300 flex items-center"
        >
          Read Article
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </motion.div>
  );
};

// --- Main Blog Component ---
export default function MyBlog() {
  const posts: PostProps[] = [ // Also typed the posts array for safety
    {
      title: "Learning React as a Vue Developer",
      date: "Nov 3, 2025",
      image: "https://images.unsplash.com/photo-1581276879432-15a19d654956?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "How to Build a REST API with Node.js",
      date: "Oct 25, 2025",
      image: "https://images.unsplash.com/photo-1593720212063-1f5d8b71a8e8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "Top 5 VS Code Extensions for Developers",
      date: "Oct 10, 2025",
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "Mastering Tailwind CSS for Modern UI Design",
      date: "Sep 18, 2025",
      image: "https://images.unsplash.com/photo-1603985529862-9a4fd7f2e4a6?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "Understanding Databases: MySQL vs MongoDB",
      date: "Aug 30, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "The Power of Serverless Functions",
      date: "Jul 15, 2025",
      image: "https://images.unsplash.com/photo-1563205792-c17296f8c775?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
  ];

  // FIX: Explicitly type cardVariants as Variants from framer-motion
  const cardVariants: Variants = {
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

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header Section */}
      <motion.header 
        className="bg-blue-700 text-white pt-24 pb-16 px-4 sm:px-6 shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-6xl font-extrabold mb-4 tracking-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              The Dev Blog
            </span>
          </motion.h1>
          <motion.p 
            className="text-blue-200 text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Dive into the latest technical tutorials, development trends, and insights from my coding journey.
          </motion.p>
        </div>
      </motion.header>

      {/* Blog Grid Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title & Animated Separator */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Recent Articles
            </h2>
            {/* FIX: Corrected closing tag and moved 'initial' to the motion.div */}
            <motion.div
              className="w-24 h-1 bg-blue-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            />
          </motion.div>

          {/* Grid Container with Staggered Animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
                <PostCard {...post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Footer / CTA (Subtle Animation) */}
      <motion.footer 
        className="text-center py-10 bg-gray-100 text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg">
          Want to see more content? <span className="text-blue-600 font-semibold">Subscribe now!</span>
        </p>
      </motion.footer>
    </div>
  );
}