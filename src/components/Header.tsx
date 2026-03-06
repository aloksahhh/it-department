"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/research", label: "Research" },
    { href: "/members", label: "Members" },
    { href: "/gallery", label: "Gallery" },
    { href: "/academics", label: "Academics" },
    { href: "/students", label: "Student's Chapter" },
    { href: "/rtci", label: "RTCI'25" },
  ];

  return (
    <header className="bg-white border-b border-gray-300 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* Left Section: Logo + Title */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Department Logo"
            width={48}
            height={48}
            className="object-contain"
          />

          {/* Title */}
          <div>
            <h1 className="text-green-800 font-semibold text-sm sm:text-base md:text-lg leading-tight">
               Information Technology
            </h1>
            <p className="text-green-700 text-xs sm:text-sm leading-tight">
             Haldia Institute of Technology 
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-green-800 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-green-600 transition whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-green-800 hover:text-green-600 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 lg:hidden"
            onClick={closeMenu}
            style={{ zIndex: 40 }}
          />
        )}

        {/* Mobile Navigation Drawer */}
        <div
          className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-xl lg:hidden
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          style={{ zIndex: 50 }}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="font-medium text-green-800">Menu</span>
            <button
              onClick={closeMenu}
              className="p-1 text-gray-500 hover:text-green-600 transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Department of IT
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}