"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, BookOpen } from "lucide-react";

// --- Internal PostCard Component (Reused from MyBlog.jsx) ---
const PostCard = ({ title, date, image }) => {
  return (
    <motion.div
      className="group flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition duration-300 transform border border-gray-100"
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.3)", 
        transition: { duration: 0.3 } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Card Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/600x400/3b82f6/ffffff?text=Post+Image";
          }}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-semibold text-blue-500 mb-1">{date}</p>
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition duration-300">
          {title}
        </h3>
        <a 
          href="#" 
          className="mt-auto text-blue-600 font-medium hover:text-blue-800 text-sm transition duration-300 flex items-center"
        >
          Read More
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </motion.div>
  );
};

// --- Internal FeaturedPost Component ---
const FeaturedPost = () => {
    const featured = {
        title: "Building the Ultimate Portfolio Site with Next.js and Tailwind CSS",
        date: "Nov 5, 2025",
        summary: "A comprehensive guide to leveraging modern frameworks to create a blazing-fast, visually stunning, and highly performant personal website. Learn advanced routing, dynamic data fetching, and animation techniques.",
        image: "https://images.unsplash.com/photo-1549692520-d73117491763?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    };

    return (
        <motion.div
            className="max-w-6xl mx-auto px-6 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border-t-8 border-blue-600">
                {/* Image Side */}
                <div className="h-64 lg:h-auto">
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://placehold.co/600x400/1e40af/ffffff?text=FEATURED";
                        }}
                    />
                </div>
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center text-blue-600 font-bold mb-3">
                        <Zap size={20} className="mr-2" />
                        FEATURED ARTICLE
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                        {featured.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {featured.summary}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">{featured.date}</span>
                        <a
                            href="#"
                            className="flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
                        >
                            <BookOpen size={20} className="mr-1" />
                            Read Now
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Home Component ---
export default function Home() {
  const latestPosts = [
    {
      title: "The Future of Web Development",
      date: "Nov 2, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "Understanding JavaScript Closures",
      date: "Oct 28, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "Mastering Tailwind CSS ",
      date: "Oct 22, 2025",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "Exploring Node.js Performance Tips",
      date: "Oct 18, 2025",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "A Deep Dive into Vue 3 Composition API",
      date: "Oct 10, 2025",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
    {
      title: "Building REST APIs with Express",
      date: "Oct 2, 2025",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % latestPosts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [latestPosts.length]);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % latestPosts.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? latestPosts.length - 1 : prev - 1
    );
  };

  // Get visible posts (3 at a time)
  const visiblePosts = [
    latestPosts[startIndex % latestPosts.length],
    latestPosts[(startIndex + 1) % latestPosts.length],
    latestPosts[(startIndex + 2) % latestPosts.length],
  ];

  return (
    <main className="min-h-screen bg-gray-50 font-inter">
      
      {/* 💻 Hero Section (Matching Header Style) */}
      <motion.header
        className="bg-blue-700 text-white pt-24 pb-20 px-4 sm:px-6 shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-7xl font-extrabold mb-4 tracking-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              The Dev Journey
            </span>
          </motion.h1>
          <motion.p
            className="text-blue-200 text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Discover stories, insights, and tips about coding, web development, and personal growth. Learn from experience and grow with every post.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            href="https://en.wikipedia.org/wiki/Web_development"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-10 py-3 bg-white text-blue-700 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.05]"
          >
            Start Reading
          </motion.a>
        </div>
      </motion.header>

      {/* 🌟 Featured Post */}
      <FeaturedPost />

      {/* 📰 Latest Posts Slider */}
      <section className="max-w-6xl mx-auto pt-20 pb-24 px-4 sm:px-6 relative">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Latest Posts
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 mt-8 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition z-20 hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 mt-8 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition z-20 hidden md:block"
        >
          <ChevronRight size={24} />
        </button>

        {/* Smooth Slider */}
        <div className="overflow-hidden w-full">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={startIndex}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center space-x-8 w-full px-2"
            >
              {/* Only show 1 post on mobile, 2 on tablet, 3 on desktop */}
              {visiblePosts.map((post, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0
                    w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-20px)]
                    ${index >= 1 && 'hidden sm:block'}
                    ${index >= 2 && 'hidden lg:block'}
                  `}
                >
                  <PostCard {...post} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Mobile controls below the slider */}
        <div className="flex justify-center space-x-4 mt-8 md:hidden">
            <button
                onClick={prevSlide}
                className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition"
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </section>
      
      {/* Subtle Footer */}
      <motion.footer 
        className="text-center py-10 bg-gray-100 text-gray-600 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm">
          Built with <b className="text-blue-600">React, Tailwind CSS, and Framer Motion</b>. © 2025 Deepak Singh.
        </p>
      </motion.footer>
    </main>
  );
}