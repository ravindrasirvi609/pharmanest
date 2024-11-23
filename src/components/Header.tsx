"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Registration", href: "/registration" },
    { name: "Contact", href: "/contact" },
    { name: "Abstract", href: "/abstractForm" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/PharmaNEST.png"
              alt="PharmaNEST"
              className="w-32 h-32"
              width={32}
              height={32}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#1e8f26] transition-colors relative group py-2"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1e8f26] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg py-4">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-[#1e8f26] transition-colors"
              >
                <span>{item.name}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-[#1e8f26] to-[#c12b23] text-white p-3 rounded-lg text-center hover:shadow-lg transition-all duration-300 mt-4"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
