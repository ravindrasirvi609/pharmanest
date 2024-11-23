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
              PharmaNest 2024
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to PharmaNest, a pioneering conference dedicated to
              exploring the intersection of pharmaceutical sciences and
              cutting-edge technology. Our focus this year centers on the
              revolutionary impact of AI and ML in drug discovery.
            </p>
            <div className="mt-6">
              <h4
                className="text-xl font-semibold mb-2"
                style={{ color: "#1e8f26" }}
              >
                Theme
              </h4>
              <p className="text-gray-700 italic">
                &quot;Recent Advances in Artificial Intelligence and Machine
                Learning-Driven Drug Discovery&quot;
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
                    Of Pharmaceutical Sciences, Guntur
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
                    Exploring breakthrough technologies in AI and ML
                    applications for pharmaceutical research and development
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
                    Bringing together researchers, industry experts, and
                    innovators to foster meaningful partnerships in
                    pharmaceutical advancement
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
