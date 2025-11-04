// components/PostCard.js
import Image from "next/image";

export default function PostCard({ title, date, image }) {
  return (
    <div className="border p-4 hover:shadow-lg transition">
      <Image src={image} alt={title} width={400} height={250} className="w-full h-60 object-cover" />
      <h4 className="font-semibold mt-3">{title}</h4>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}
