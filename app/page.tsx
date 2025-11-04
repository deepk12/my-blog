import Navbar from "@/components/Navbar";
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
      title: "Mastering Tailwind CSS for Responsive Design",
      date: "Oct 22, 2025",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 🏠 Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover stories, insights, and tips about coding, web development, and personal growth.
          Learn from experience and grow with every post.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          Start Reading
        </button>
      </section>

      {/* 🌟 Featured Post */}
      <FeaturedPost />

      {/* 📰 Latest Posts Section */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </section>

      {/* ✉️ Footer */}
      <footer className="mt-16 py-8 text-center bg-white border-t">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Deepak Singh’s Blog — Built with ❤️ using Next.js and Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
