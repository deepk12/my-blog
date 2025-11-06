"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeaturedPost from "@/components/FeaturedPost";
import PostCard from "@/components/PostCard";

export default function Home() {
  const latestPosts = [
    {
      title: "The Future of Web Development",
      date: "Nov 2, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "Understanding JavaScript Closures",
      date: "Oct 28, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      title: "Mastering Tailwind CSS ",
      date: "Oct 22, 2025",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    },
    {
      title: "Exploring Node.js Performance Tips",
      date: "Oct 18, 2025",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    },
    {
      title: "A Deep Dive into Vue 3 Composition API",
      date: "Oct 10, 2025",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    },
    {
      title: "Building REST APIs with Express",
      date: "Oct 2, 2025",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <main>
      {/* 🏠 Hero Section */}
          <section className="relative overflow-hidden text-center py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Floating Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#93c5fd_0%,_transparent_70%)] opacity-40 animate-pulse"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 tracking-tight">
          Welcome to <span className="text-blue-500">My Blog</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Dive into the world of <span className="text-blue-600 font-medium">web development</span>, 
          discover coding insights, and grow with every post — one line of code at a time.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Start Reading
          </button>
          <button className="px-8 py-3 border border-blue-600 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-40"></div>
    </section>


      {/* 🌟 Featured Post */}
      <FeaturedPost />

      {/* 📰 Latest Posts Slider */}
    <section className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 relative">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Latest Posts
      </h2>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Smooth Slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          key={startIndex}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center space-x-1 w-full px-2"
        >
          {visiblePosts.map((post, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-full sm:w-1/2 lg:w-1/3
              "
            >
              <PostCard {...post} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>


    </main>
  );
}
