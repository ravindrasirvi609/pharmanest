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
    { name: "Abstract", href: "/abstractForm" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-32 h-12 rounded-lg overflow-hidden">
              <Image
                src="/PharmaNEST.png"
                alt="Logo"
                className="w-full h-full object-cover"
                width={128}
                height={48}
              />
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
                    ? "text-black"
                    : "text-gray-800 hover:text-black"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform transition-transform duration-300 ${
                    activeItem === item.name ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
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
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
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
                      ? "bg-emerald-50 text-black"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="font-bold">{item.name}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      activeItem === item.name
                        ? "text-emerald-600 translate-x-1"
                        : ""
                    }`}
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
