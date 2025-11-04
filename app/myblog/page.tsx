import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

export default function MyBlog() {
  const posts = [
    {
      title: "Learning React as a Vue Developer",
      date: "Nov 3, 2025",
      image: "https://images.unsplash.com/photo-1581276879432-15a19d654956",
    },
    {
      title: "How to Build a REST API with Node.js",
      date: "Oct 25, 2025",
      image: "https://images.unsplash.com/photo-1593720212063-1f5d8b71a8e8",
    },
    {
      title: "Top 5 VS Code Extensions for Developers",
      date: "Oct 10, 2025",
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-6xl mx-auto mt-10 px-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">My Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}
