"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Replaced react-icons/fa with inline SVGs to ensure compilation
import {
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes,
  FaLinkedinIn
} from "react-icons/fa";

// Variants for the main navigation container
const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 10, delay: 0.1 }
    }
};

// Variants for mobile menu dropdown
const menuVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    open: {
        height: "auto",
        opacity: 1,
        transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }
    }
};

// Inline SVG Components to replace react-icons
const IconWrapper = ({ children, size = 20, className = '' }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        {children}
    </svg>
);

const SearchIcon = (props) => (
    <IconWrapper {...props}>
        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm12 4-4.3-4.3"/>
    </IconWrapper>
);

const FacebookIcon = (props) => (
    <IconWrapper {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </IconWrapper>
);

const InstagramIcon = (props) => (
    <IconWrapper {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
    </IconWrapper>
);

const LinkedInIcon = (props) => (
    <IconWrapper {...props}>
        <path d="M16 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6v8h4V10a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6h4zM4 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
    </IconWrapper>
);

const BarsIcon = (props) => (
    <IconWrapper {...props}>
        <path d="M3 12h18M3 6h18M3 18h18"/>
    </IconWrapper>
);

const TimesIcon = (props) => (
    <IconWrapper {...props}>
        <path d="M18 6L6 18M6 6l12 12"/>
    </IconWrapper>
);


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "My Blog", path: "/myblog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gray-900 text-white shadow-2xl font-inter border-b-2 border-blue-600/50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-400 cursor-pointer hover:text-blue-300 transition-colors duration-300">
          <a href="/">
            Dev<span className="text-white">Journal</span>
          </a>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.path}
              className="relative font-semibold text-lg text-gray-200 transition-all duration-300 group tracking-wide"
              whileHover={{ color: '#60A5FA' }} // Blue-400 equivalent
            >
              {link.name}
              {/* Animated Underline */}
              <motion.span
                className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          ))}
        </div>

        {/* Social Icons & Search */}
        <div className="hidden md:flex space-x-6 items-center text-gray-400">
          <motion.div whileHover={{ scale: 1.1, color: '#3B82F6' }}>
            <SearchIcon className="cursor-pointer transition" size={20} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: '#3B82F6' }}>
            <FacebookIcon className="cursor-pointer transition" size={20} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: '#3B82F6' }}>
            <InstagramIcon className="cursor-pointer transition" size={20} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: '#3B82F6' }}>
            <LinkedInIcon className="cursor-pointer transition" size={20} />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-200">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={menuOpen ? "times" : "bars"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {menuOpen ? (
                        <TimesIcon size={24} className="text-blue-400" />
                    ) : (
                        <BarsIcon size={24} className="text-blue-400" />
                    )}
                </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-gray-800 border-t border-gray-700/50 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center py-6 space-y-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-200 text-xl font-medium hover:text-blue-400 transition-colors duration-200 w-full text-center py-1"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex space-x-8 pt-6 border-t border-gray-700/50 w-full justify-center text-gray-400">
                <motion.div whileHover={{ scale: 1.2, color: '#3B82F6' }}>
                    <FacebookIcon size={20} className="cursor-pointer transition" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, color: '#3B82F6' }}>
                    <InstagramIcon size={20} className="cursor-pointer transition" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, color: '#3B82F6' }}>
                    <LinkedInIcon size={20} className="cursor-pointer transition" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}