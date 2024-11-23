import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-[#1e8f26]" />
                <span className="text-gray-600">+91 94609-71652</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#1e8f26]" />
                <span className="text-gray-600">conferences@opf.org.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#1e8f26]" />
                <span className="text-gray-600">CHIPS, Guntur</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1e8f26] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1e8f26] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1e8f26] transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-[#1e8f26] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1e8f26] transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1e8f26] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1e8f26] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <Image
              src="/PharmaNEST.png"
              alt="Company Logo"
              className="mb-4"
              width={150}
              height={50}
            />
            <p className="text-gray-600 mb-4">
              We&apos;re dedicated to providing exceptional service and
              innovative solutions to meet your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2024 All rights reserved.</p>
            <p className="text-gray-600 text-sm">
              Designed by{" "}
              <span className="text-[#1e8f26] font-semibold">
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
