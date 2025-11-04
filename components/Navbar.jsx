import { FaFacebookF, FaInstagram, FaPinterestP, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "My Blog", path: "/myblog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 border-b border-gray-200 px-8 bg-white">
      <h1 className="text-2xl font-bold text-blue-700">My Blog</h1>

      <div className="flex space-x-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-gray-700 hover:text-blue-700 transition font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex space-x-4 text-gray-600">
        <FaSearch className="cursor-pointer" />
        <FaFacebookF className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaPinterestP className="cursor-pointer" />
      </div>
    </nav>
  );
}
