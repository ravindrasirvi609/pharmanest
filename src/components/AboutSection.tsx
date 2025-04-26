import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Building2, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            About PharmaNEST 6.E
          </h2>
          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Main text */}
          <div className="space-y-6 glassmorphism-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Transforming Healthcare Through AI & Pharmaceutical Innovation
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              PharmaNEST 6.E represents our most ambitious conference yet,
              dedicated to showcasing the revolutionary impact of Artificial
              Intelligence in pharmaceutical research and healthcare. This
              premier event convenes leading researchers, industry pioneers, and
              healthcare visionaries to explore cutting-edge applications that
              are reshaping drug discovery and patient care.
            </p>
            <div className="mt-6 p-4 glassmorphism rounded-xl">
              <h4 className="text-xl font-semibold mb-2 text-white">
                2025 Theme
              </h4>
              <p className="text-[#00FFCC] italic font-medium">
                &quot;Artificial Intelligence and machine learning: A Game
                changer in the Pharma field&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col items-center glassmorphism p-4 rounded-lg text-center">
                <div className="bg-[#00FFCC]/10 p-3 rounded-full mb-3">
                  <Globe className="w-6 h-6 text-[#00FFCC]" />
                </div>
                <span className="text-white font-medium">Global Platform</span>
              </div>
              <div className="flex flex-col items-center glassmorphism p-4 rounded-lg text-center">
                <div className="bg-[#00FFCC]/10 p-3 rounded-full mb-3">
                  <Zap className="w-6 h-6 text-[#00FFCC]" />
                </div>
                <span className="text-white font-medium">Future-Ready</span>
              </div>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white">Organized By</h4>
                  <p className="text-gray-300">Vellalar College of Pharmacy</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white">
                    Innovation Focus
                  </h4>
                  <p className="text-gray-300">
                    Pioneering AI-driven technologies for precision medicine,
                    personalized treatments, and revolutionary approaches to
                    drug discovery and development.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] p-3 rounded-lg">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white">
                    Global Collaboration
                  </h4>
                  <p className="text-gray-300">
                    Creating powerful connections between AI specialists,
                    pharmaceutical researchers, healthcare providers, and
                    regulatory authorities to drive transformative healthcare
                    solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
