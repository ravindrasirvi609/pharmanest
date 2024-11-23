import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#1e8f26" }}>
            About the Conference
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: "#c12b23" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Main text */}
          <div className="space-y-6">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#1e8f26" }}
            >
              Accelerating Drug Discovery and Development Through AI
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to our conference, a transformative event dedicated to
              highlighting the pivotal role of Artificial Intelligence (AI) in
              revolutionizing drug discovery and development. This event brings
              together global leaders, researchers, and innovators from
              academia, industry, and regulatory bodies to share groundbreaking
              insights and breakthroughs.
            </p>
            <div className="mt-6">
              <h4
                className="text-xl font-semibold mb-2"
                style={{ color: "#1e8f26" }}
              >
                Theme
              </h4>
              <p className="text-gray-700 italic">
                &quot;Accelerating Drug Discovery and Development Through
                Artificial Intelligence&quot;
              </p>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-4">
            <Card
              className="border-l-4 hover:shadow-lg transition-shadow duration-300"
              style={{ borderLeftColor: "#1e8f26" }}
            >
              <CardContent className="p-4 flex items-start space-x-4">
                <Building2 className="w-6 h-6" style={{ color: "#c12b23" }} />
                <div>
                  <h4 className="font-semibold mb-2">Organized By</h4>
                  <p className="text-gray-600">
                    Operant Pharmacy Federation & Chebrolu Hanumaiah Institute
                    of Pharmaceutical Sciences, Guntur
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-l-4 hover:shadow-lg transition-shadow duration-300"
              style={{ borderLeftColor: "#eacf34" }}
            >
              <CardContent className="p-4 flex items-start space-x-4">
                <Brain className="w-6 h-6" style={{ color: "#c12b23" }} />
                <div>
                  <h4 className="font-semibold mb-2">Innovation Focus</h4>
                  <p className="text-gray-600">
                    Highlighting AI-driven tools and techniques for target
                    identification, lead optimization, and clinical trial
                    advancements in drug development.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-l-4 hover:shadow-lg transition-shadow duration-300"
              style={{ borderLeftColor: "#c12b23" }}
            >
              <CardContent className="p-4 flex items-start space-x-4">
                <Users className="w-6 h-6" style={{ color: "#1e8f26" }} />
                <div>
                  <h4 className="font-semibold mb-2">Collaboration</h4>
                  <p className="text-gray-600">
                    Bridging the gap between AI developers, pharmaceutical
                    professionals, and regulatory bodies to foster
                    interdisciplinary partnerships and innovation.
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
