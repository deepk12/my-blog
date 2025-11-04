import Image from "next/image";

export default function FeaturedPost() {
  return (
    <section className="max-w-5xl mx-auto mt-10">
      <h2 className="uppercase tracking-widest border px-4 py-2 w-fit text-sm mb-4">
        Featured Post
      </h2>

      <div className="border rounded-lg overflow-hidden">
        <Image
          src="/images/featured.jpeg"
          alt="Featured Post"
          width={1200}
          height={600}
          className="w-full h-96 object-cover"
        />

        <div className="p-6">
          <p className="text-sm text-gray-500">
            Admin • Mar 23, 2023 • 2 min read
          </p>
          <h3 className="text-2xl font-bold mt-2">
            Back to Fiction: What I'm Reading This Summer
          </h3>
          <p className="text-gray-600 mt-2">
            Create a blog post subtitle that summarizes your post in a few short, punchy sentences...
          </p>
        </div>
      </div>
    </section>
  );
}
