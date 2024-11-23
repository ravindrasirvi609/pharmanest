"use client";
import React, { useState } from "react";
import { Star, Award, Diamond, Gem, ChevronRight } from "lucide-react";
import Image from "next/image";

const SponsorsPartnersSection = () => {
  const [activeTab, setActiveTab] = useState<"platinum" | "gold" | "silver">(
    "platinum"
  );

  const sponsors = {
    platinum: [
      { id: 1, name: "TechCorp Global", type: "platinum" },
      { id: 2, name: "Innovation Labs", type: "platinum" },
      { id: 3, name: "Future Systems", type: "platinum" },
    ],
    gold: [
      { id: 4, name: "Digital Solutions", type: "gold" },
      { id: 5, name: "Smart Technologies", type: "gold" },
      { id: 6, name: "Cloud Platform Co", type: "gold" },
      { id: 7, name: "Data Dynamics", type: "gold" },
    ],
    silver: [
      { id: 8, name: "Tech Innovate", type: "silver" },
      { id: 9, name: "Software Solutions", type: "silver" },
      { id: 10, name: "AI Research Lab", type: "silver" },
      { id: 11, name: "Digital Ventures", type: "silver" },
      { id: 12, name: "Tech Partners", type: "silver" },
    ],
  };

  const partners = [
    { id: 13, name: "University of Technology" },
    { id: 14, name: "Research Institute" },
    { id: 15, name: "Innovation Hub" },
    { id: 16, name: "Tech Association" },
  ];

  const SponsorIcon: React.FC<{
    type: "platinum" | "gold" | "silver" | "default";
  }> = ({ type }) => {
    switch (type) {
      case "platinum":
        return <Diamond className="w-8 h-8 text-[#c12b23]" />;
      case "gold":
        return <Award className="w-8 h-8 text-[#eacf34]" />;
      case "silver":
        return <Star className="w-8 h-8 text-gray-400" />;
      default:
        return <Gem className="w-8 h-8 text-[#1e8f26]" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Sponsors & Partners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;re proud to partner with leading organizations who share our
          vision for innovation and excellence.
        </p>
      </div>

      {/* Sponsors Section */}
      <div className="mb-16">
        <div className="flex justify-center space-x-4 mb-8">
          {["platinum", "gold", "silver"].map((type) => (
            <button
              key={type}
              onClick={() =>
                setActiveTab(type as "platinum" | "gold" | "silver")
              }
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === type
                  ? "bg-[#1e8f26] text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Sponsors
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors[activeTab].map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-40 bg-gray-50 rounded-lg mb-4">
                {/* Placeholder for sponsor logo */}
                <Image
                  src="/PharmaNEST.png"
                  alt={sponsor.name}
                  className="max-w-[200px] max-h-[80px] object-contain"
                  width={200}
                  height={80}
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <SponsorIcon
                    type={sponsor.type as "platinum" | "gold" | "silver"}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{sponsor.name}</h3>
                <span className="text-sm text-gray-500 capitalize">
                  {sponsor.type} Sponsor
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Strategic Partners
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg mb-3">
                {/* Placeholder for partner logo */}
                <Image
                  src="/PharmaNEST.png"
                  alt={partner.name}
                  className="max-w-[160px] max-h-[60px] object-contain"
                  width={160}
                  height={60}
                />
              </div>
              <div className="text-center">
                <h4 className="font-medium text-sm">{partner.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Sponsor CTA */}
      <div className="text-center bg-gradient-to-r from-[#1e8f26] to-[#167d1f] rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-4">Become a Sponsor</h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Join our growing community of sponsors and partners. Showcase your
          brand to a global audience of industry leaders and innovators.
        </p>
        <a
          href="#sponsor-packages"
          className="inline-flex items-center px-6 py-3 bg-white text-[#1e8f26] rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
        >
          View Sponsorship Packages
          <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default SponsorsPartnersSection;
