export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-4xl mx-auto mt-20 px-6 py-10">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          About Me
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-700 leading-relaxed text-lg mb-4">
          Hello! I'm <b>Deepak Singh</b>, a passionate{" "}
          <span className="text-blue-600 font-medium">Full Stack Developer</span> who
          loves building modern and scalable web applications using{" "}
          <b>Vue.js</b>, <b>Node.js</b>, and <b>Next.js</b>. I enjoy exploring new
          technologies and crafting digital experiences that make a real impact.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          Through this blog, I share coding tutorials, career insights, and lessons
          learned from my journey in tech. My goal is to inspire and help others grow
          into confident developers.
        </p>

        {/* Journey Section */}
        <h2 className="text-3xl font-semibold text-blue-600 mt-12 mb-4">
          My Journey
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          My programming journey began with curiosity — how do websites actually
          work? Over the years, I’ve gained experience with front-end frameworks like{" "}
          <b>Vue.js</b> and <b>React.js</b>, and built powerful backends using{" "}
          <b>Node.js</b> and <b>Express.js</b>. I also work with databases such as{" "}
          <b>MySQL</b> and <b>MongoDB</b> to ensure applications are both fast and
          reliable.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Along the way, I’ve collaborated with teams, contributed to open-source
          projects, and developed personal apps that solve real-world challenges. I
          prioritize writing clean, maintainable code and creating user-friendly
          interfaces.
        </p>

        {/* Current Work Section */}
        <h2 className="text-3xl font-semibold text-blue-600 mt-12 mb-4">
          What I’m Working On
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lately, I’ve been diving deeper into <b>Next.js</b> for server-side
          rendering and building SEO-friendly applications. I’m also refining my UI
          design skills with <b>Tailwind CSS</b> and experimenting with smooth
          animations using <b>Framer Motion</b>.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          When I’m not coding, I enjoy reading tech blogs, practicing problem-solving,
          and helping others in the developer community through mentoring and
          discussions.
        </p>

        {/* Connect Section */}
        <h2 className="text-3xl font-semibold text-blue-600 mt-12 mb-4">
          Let’s Connect
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          I believe learning becomes powerful when shared. If you’d like to
          collaborate, exchange ideas, or just say hello — feel free to reach out via
          my{" "}
          <a
            href="/contact"
            className="text-blue-600 hover:underline font-medium"
          >
            Contact
          </a>{" "}
          page. Let’s create something amazing together!
        </p>
      </section>
    </main>
  );
}
