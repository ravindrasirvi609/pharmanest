import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1e8f26] to-[#c12b23] text-white h-screen">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40 bg-[url('/college.jpg')] bg-cover bg-center h-screen"></div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
          {/* Conference Info Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-[#eacf34] bg-opacity-80 rounded-full text-sm">
            <span className="font-medium">Conference 2025</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Shaping the Future of Drug Discovery through AI & ML!
          </h1>

          {/* Date and Location */}
          <div className="flex flex-col sm:flex-row gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>30-31 January, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>
                Chebrolu Hanumaiah Institute Of Pharmaceutical Sciences, Guntur
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            {/* Primary CTA */}
            <button className="inline-flex items-center justify-center px-6 py-3 bg-[#eacf34] hover:bg-[#c12b23] text-white font-semibold rounded-lg transition-colors duration-200">
              Register Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>

            {/* Secondary CTAs */}
            <button className="inline-flex items-center justify-center px-6 py-3 bg-[#1e8f26] hover:bg-[#1a7e22] text-white font-semibold rounded-lg transition-colors duration-200">
              Submit Abstract
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-white border-opacity-20 hover:bg-[#c12b23] hover:bg-opacity-50 text-white font-semibold rounded-lg transition-colors duration-200">
              View Agenda
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 w-64 h-64 bg-[#1e8f26] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-0 left-0 transform -translate-y-1/2 w-96 h-96 bg-[#c12b23] rounded-full filter blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default HeroSection;
