import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  UserSquare2,
  Network,
  BrainCircuit,
  Users,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const KeyHighlights = () => {
  const speakers = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      specialty: "Drug Discovery & ML",
      institution: "PharmaTech Institute",
    },
    {
      name: "Prof. James Wilson",
      role: "Head of Innovation",
      specialty: "ML in Pharmaceutical Research",
      institution: "Global Pharma Labs",
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Lead Data Scientist",
      specialty: "AI Applications in Medicine",
      institution: "BioTech Solutions",
    },
  ];

  const topics = [
    {
      title: "AI in Drug Discovery",
      description:
        "Latest advancements in AI-powered drug discovery platforms and methodologies",
    },
    {
      title: "ML Applications in Pharma",
      description:
        "Practical applications of machine learning in pharmaceutical research and development",
    },
    {
      title: "Future Innovations",
      description:
        "Emerging trends and future directions in AI/ML-driven pharmaceutical research",
    },
    {
      title: "Data Analytics in Healthcare",
      description:
        "Leveraging big data for improved drug development and patient outcomes",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#1e8f26" }}>
            Key Highlights
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: "#c12b23" }}
          ></div>
        </div>

        {/* Grid Container */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Keynote Speakers Section */}
          <Card className="col-span-1 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <UserSquare2
                  className="w-8 h-8 mr-3"
                  style={{ color: "#1e8f26" }}
                />
                <h3 className="text-2xl font-semibold">
                  Meet Our Keynote Speakers
                </h3>
              </div>
              <div className="space-y-6">
                {speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <Image
                      src="/PharmaNEST.png"
                      alt={speaker.name}
                      className="w-16 h-16 rounded-full object-cover"
                      width={100}
                      height={100}
                    />
                    <div>
                      <h4
                        className="font-semibold"
                        style={{ color: "#1e8f26" }}
                      >
                        {speaker.name}
                      </h4>
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                      <p className="text-sm text-gray-500">
                        {speaker.institution}
                      </p>
                      <p
                        className="text-sm mt-1 italic"
                        style={{ color: "#c12b23" }}
                      >
                        {speaker.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Topics Section */}
          <Card className="col-span-1 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <BrainCircuit
                  className="w-8 h-8 mr-3"
                  style={{ color: "#c12b23" }}
                />
                <h3 className="text-2xl font-semibold">Critical Topics</h3>
              </div>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 border-l-4"
                    style={{
                      borderLeftColor: index % 2 === 0 ? "#1e8f26" : "#eacf34",
                    }}
                  >
                    <h4 className="font-semibold mb-2">{topic.title}</h4>
                    <p className="text-gray-600 text-sm">{topic.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Networking Section */}
          <Card className="col-span-1 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Network
                  className="w-8 h-8 mr-3"
                  style={{ color: "#eacf34" }}
                />
                <h3 className="text-2xl font-semibold">
                  Networking Opportunities
                </h3>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center mb-3">
                    <Users
                      className="w-6 h-6 mr-2"
                      style={{ color: "#1e8f26" }}
                    />
                    <h4 className="font-semibold">Interactive Sessions</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Engage in dynamic discussions with industry leaders and
                    peers
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center mb-3">
                    <Calendar
                      className="w-6 h-6 mr-2"
                      style={{ color: "#c12b23" }}
                    />
                    <h4 className="font-semibold">Scheduled Networking</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Dedicated time slots for one-on-one meetings and group
                    discussions
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-4">What to Expect:</h4>
                  <ul className="space-y-3">
                    {[
                      "Professional networking events",
                      "Industry expert roundtables",
                      "Research collaboration opportunities",
                      "Career development sessions",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <ArrowRight
                          className="w-4 h-4 mr-2"
                          style={{ color: "#1e8f26" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
