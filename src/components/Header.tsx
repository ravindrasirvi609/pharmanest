"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

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
    { name: "Speakers", href: "/speakers" },
    { name: "Abstract", href: "/abstractForm" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "glassmorphism-dark py-2" : "glassmorphism py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-40 h-12 rounded-lg overflow-hidden relative group">
              <Image
                src="/PharmaNEST.png"
                alt="PharmaNEST 6.E"
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                width={160}
                height={48}
              />
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00FFCC] to-transparent opacity-70"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`relative px-3 py-2 text-sm font-bold transition-all duration-300 ${
                  activeItem === item.name
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] transform transition-transform duration-300 ${
                    activeItem === item.name ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
            <Link href="/registration">
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] text-black font-semibold text-sm hover:shadow-lg hover:shadow-[#00FFCC]/20 transition-all duration-300 transform hover:translate-y-[-2px]">
                Register
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 glassmorphism-dark transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/PharmaNEST.png"
                alt="PharmaNEST 6.E"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                    activeItem === item.name
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <span className="font-bold">{item.name}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      activeItem === item.name
                        ? "text-[#00FFCC] translate-x-1"
                        : ""
                    }`}
                  />
                </Link>
              ))}
              <Link href="/registration" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] text-black font-semibold text-sm hover:opacity-90 transition-all duration-300">
                  Register Now
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
