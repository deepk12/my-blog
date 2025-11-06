"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "My Blog", path: "/myblog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight text-blue-400">
          My Blog
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="relative font-medium text-gray-200 hover:text-blue-400 transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5 text-gray-300">
          <FaSearch className="cursor-pointer hover:text-blue-400 transition" />
          <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
          <FaInstagram className="cursor-pointer hover:text-blue-400 transition" />
          <FaPinterestP className="cursor-pointer hover:text-blue-400 transition" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-200">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes size={22} className="text-blue-400" />
            ) : (
              <FaBars size={22} className="text-blue-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-blue-400 font-medium transition"
              >
                {link.name}
              </a>
            ))}

            <div className="flex space-x-6 pt-4 border-t border-gray-700 w-full justify-center text-gray-300">
              <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
              <FaInstagram className="cursor-pointer hover:text-blue-400 transition" />
              <FaPinterestP className="cursor-pointer hover:text-blue-400 transition" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
