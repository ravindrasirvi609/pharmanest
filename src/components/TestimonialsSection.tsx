"use client";
import React, { useState, useEffect } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "AI Research Director",
      company: "Tech Innovation Labs",
      image: "/api/placeholder/80/80",
      quote:
        "This conference exceeded all expectations. The quality of presentations and networking opportunities were outstanding. It's a must-attend event for anyone in the tech industry.",
      rating: 5,
      type: "Speaker",
      year: "2023",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Global Software Solutions",
      image: "/api/placeholder/80/80",
      quote:
        "The workshops were incredibly practical and informative. I learned techniques that I'm already applying in my daily work. The networking opportunities were invaluable.",
      rating: 5,
      type: "Attendee",
      year: "2023",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Product Manager",
      company: "Innovation Hub",
      image: "/api/placeholder/80/80",
      quote:
        "A perfectly organized event with an amazing lineup of speakers. The interactive sessions and panel discussions were particularly enlightening.",
      rating: 5,
      type: "Attendee",
      year: "2023",
    },
    {
      id: 4,
      name: "Prof. David Kim",
      role: "Department Head",
      company: "University of Technology",
      image: "/api/placeholder/80/80",
      quote:
        "The academic track was exceptional this year. The blend of theoretical and practical sessions created the perfect learning environment for students and professionals alike.",
      rating: 5,
      type: "Speaker",
      year: "2023",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) =>
          current === testimonials.length - 1 ? 0 : current + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const RatingStars: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "fill-[#eacf34] text-[#eacf34]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Attendees Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our past speakers and attendees about their experiences at
            our conference.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
            <Quote className="w-12 h-12 text-[#1e8f26] opacity-20" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Testimonial Content */}
            <div className="space-y-6">
              <div className="relative">
                <p className="text-xl leading-relaxed text-gray-700 italic">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#c12b23] text-white text-xs px-2 py-1 rounded-full">
                    {testimonials[activeIndex].type}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-sm text-[#1e8f26]">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <RatingStars rating={testimonials[activeIndex].rating} />
                <span className="text-sm text-gray-500">
                  Conference {testimonials[activeIndex].year}
                </span>
              </div>
            </div>

            {/* Testimonial Preview Cards */}
            <div className="hidden md:block">
              <div className="relative h-96">
                {testimonials.map((testimonial, index) => {
                  const offset = index - activeIndex;
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={testimonial.id}
                      className={`absolute w-full p-6 bg-white border rounded-xl shadow-lg transition-all duration-500 ${
                        isActive
                          ? "opacity-100 z-20 transform scale-100"
                          : offset === 1
                          ? "opacity-60 z-10 transform translate-y-4 scale-95"
                          : offset === 2
                          ? "opacity-30 z-0 transform translate-y-8 scale-90"
                          : "opacity-0 z-0 transform translate-y-12 scale-85"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-6 h-6 text-[#1e8f26]" />
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#1e8f26] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-6 h-6 text-[#1e8f26]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
