"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FeaturedPost() {
  const featuredPosts = [
    {
      title: "Back to Fiction: What I'm Reading This Summer",
      date: "Mar 23, 2023",
      readTime: "2 min read",
      image: "/images/featured.jpeg",
    },
    {
      title: "Designing for the Web: Minimalism in UI",
      date: "Apr 10, 2023",
      readTime: "3 min read",
      image: "/images/featured2.jpeg",
    },
    {
      title: "How I Stay Productive as a Developer",
      date: "May 1, 2023",
      readTime: "4 min read",
      image: "/images/featured3.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const current = featuredPosts[index];

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="uppercase tracking-widest border px-4 py-2 w-fit text-sm mb-4">
        Featured Post
      </h2>

      <div className="relative border rounded-lg overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative w-full h-96"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="p-6 bg-white">
          <p className="text-sm text-gray-500">
            Admin • {current.date} • {current.readTime}
          </p>
          <h3 className="text-2xl font-bold mt-2 text-blue-700">
            {current.title}
          </h3>
          <p className="text-gray-600 mt-2">
            Create a blog post subtitle that summarizes your post in a few short, punchy sentences...
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredPosts.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
