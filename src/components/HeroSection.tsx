"use client";
import React, { useEffect, useState } from "react";
import { Calendar, MapPin, ChevronRight, Download, Clock } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const countdownDate = new Date("2025-01-30T00:00:00").getTime();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRegisterClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#1e8f26] via-black to-[#c12b23] ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('/college.jpg')] bg-center opacity-10 animate-pulse"></div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          {/* Alert for registration */}
          {showAlert && (
            <div className="fixed top-4 right-4 z-50">
              <Alert className="bg-[#eacf34] text-white border-none animate-slideIn">
                <AlertDescription>
                  Registration process initiated! Check your email.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Conference badge */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#eacf34] rounded-full text-black font-semibold transform hover:scale-105 transition-transform cursor-pointer">
              <Clock className="w-4 h-4 mr-2" />
              <span>Conference 2025</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#eacf34] to-transparent"></div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Title with gradient text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#eacf34] to-white">
                  Accelerating Drug Discovery and Development
                </span>
                <br />
                <span className="text-white">Through AI!</span>
              </h1>

              {/* Event details with hover effects */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center space-x-3 bg-black bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                    <Calendar className="w-5 h-5 text-[#eacf34]" />
                    <span className="text-white">30-31 January, 2025</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-black bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                    <MapPin className="w-5 h-5 text-[#eacf34]" />
                    <span className="text-white">CHIPS, Guntur</span>
                  </div>
                </div>
              </div>

              {/* CTA buttons with enhanced hover effects */}
              <div className="flex flex-wrap gap-4">
                <Link href="/registration">
                  <button
                    onClick={handleRegisterClick}
                    className="group relative px-6 py-3 bg-[#eacf34] text-black font-semibold rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-[#eacf34]/20"
                  >
                    <span className="relative z-10 flex items-center">
                      Register Now
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </button>
                </Link>

                <Link href="/abstractForm">
                  <button className="px-6 py-3 bg-[#1e8f26] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Submit Abstract
                  </button>
                </Link>
              </div>
            </div>

            {/* Countdown section with glass morphism effect */}
            <div className="backdrop-blur-lg bg-white bg-opacity-5 rounded-2xl p-8 border border-white border-opacity-10">
              <h2 className="text-2xl font-semibold text-white text-center mb-8">
                Conference Begins In
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center p-4 bg-[#eacf34] bg-opacity-10 rounded-lg border border-[#eacf34] border-opacity-20"
                  >
                    <span className="text-4xl font-bold text-white mb-2">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#eacf34]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e8f26] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c12b23] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
