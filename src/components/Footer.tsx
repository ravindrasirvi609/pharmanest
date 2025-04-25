"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative">
      {/* Top curved separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform">
        <svg
          className="relative block w-full h-12 sm:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current text-background opacity-20"
          ></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="glassmorphism-dark pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div className="glassmorphism-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-gradient">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[#00FFCC]/10 group-hover:bg-[#00FFCC]/20 transition-colors">
                    <Phone size={18} className="text-[#00FFCC]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    +91 94609-71652
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[#00FFCC]/10 group-hover:bg-[#00FFCC]/20 transition-colors">
                    <Mail size={18} className="text-[#00FFCC]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    conferences@opf.org.in
                  </span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-[#00FFCC]/10 group-hover:bg-[#00FFCC]/20 transition-colors">
                    <MapPin size={18} className="text-[#00FFCC]" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    CHIPS, Guntur
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glassmorphism-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-gradient">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC]/50 group-hover:bg-[#00FFCC] transition-colors"></span>
                    About PharmaNEST 6.E
                  </Link>
                </li>
                <li>
                  <Link
                    href="/registration"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC]/50 group-hover:bg-[#00FFCC] transition-colors"></span>
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/speakers"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC]/50 group-hover:bg-[#00FFCC] transition-colors"></span>
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/abstractForm"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFCC]/50 group-hover:bg-[#00FFCC] transition-colors"></span>
                    Submit Abstract
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="glassmorphism-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-gradient">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 rounded-full glassmorphism hover:bg-[#00FFCC]/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-[#00FFCC]" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full glassmorphism hover:bg-[#00FFCC]/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-[#00FFCC]" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full glassmorphism hover:bg-[#00FFCC]/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-[#00FFCC]" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full glassmorphism hover:bg-[#00FFCC]/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-[#00FFCC]" />
                </a>
              </div>

              <div className="mt-8">
                <h5 className="text-lg font-medium mb-3 text-white">
                  Newsletter
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="glassmorphism border border-[#00FFCC]/20 rounded-l-lg px-4 py-2 w-full bg-transparent text-white focus:outline-none focus:border-[#00FFCC]/50"
                  />
                  <button className="bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] text-black font-medium px-4 rounded-r-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* About Company */}
            <div className="glassmorphism-card p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <Image
                  src="/PharmaNEST.png"
                  alt="PharmaNEST 6.E"
                  className="mb-4 object-contain"
                  width={150}
                  height={50}
                />
              </div>
              <p className="text-gray-300 mb-4 text-center">
                Empowering pharmaceutical innovation through cutting-edge
                technology and collaborative research.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={scrollToTop}
                  className="p-3 glassmorphism rounded-full hover:bg-[#00FFCC]/10 transition-colors group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp
                    size={20}
                    className="text-[#00FFCC] group-hover:translate-y-[-2px] transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="glassmorphism-dark border-t border-[#00FFCC]/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 PharmaNEST 6.E. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed by{" "}
              <span className="text-gradient font-semibold">
                Ravindra Choudhary
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
