
export default function Footer() {
  return (
    <footer className="mt-16 py-8 text-center bg-white border-t border-gray-200 shadow-md">
      <p className="text-gray-600 text-sm font-medium">
        © {new Date().getFullYear()} Deepak Singh’s Blog — Built with ❤️ using Next.js and Tailwind CSS
      </p>
    </footer>
  );
}