import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-4xl mx-auto mt-16 px-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Me</h1>
        <p className="text-gray-600 mb-6">
          I'd love to hear from you! Whether it's a question, feedback, or just
          to say hello, feel free to reach out.
        </p>
        <form className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
