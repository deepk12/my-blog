import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import common components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Deepak Singh’s Blog",
  description: "A modern developer blog built with Next.js and Tailwind CSS",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* 🧭 Common Navbar */}
        <Navbar />

        {/* 📄 Page Content */}
        <main className="min-h-screen">{children}</main>

        {/* ✉️ Common Footer */}
        <Footer />
      </body>
    </html>
  );
}
