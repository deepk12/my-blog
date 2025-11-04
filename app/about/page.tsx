import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-4xl mx-auto mt-16 px-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">About Me</h1>
        <p className="text-gray-700 leading-relaxed">
          Hello! I'm <b>Deepak Singh</b>, a passionate full-stack developer who loves
          building modern web applications using <b>Vue.js</b>, <b>Node.js</b>, and
          <b>Next.js</b>. I enjoy learning new technologies and creating digital
          experiences that make an impact.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          On this blog, I share coding tutorials, career tips, and insights from my
          developer journey. I hope my writing helps you learn, grow, and stay
          motivated in your own path.
        </p>
      </section>
    </main>
  );
}
