import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookCopy,
  Calendar,
  FileCheck,
  Award,
  ArrowRight,
  FileText,
} from "lucide-react";

const CallForAbstracts = () => {
  const topics = [
    "AI-Driven Drug Discovery Methods",
    "Machine Learning in Pharmaceutical Research",
    "Deep Learning Applications in Drug Development",
    "Natural Language Processing in Medical Research",
    "Computational Drug Design",
    "Predictive Analytics in Pharma",
  ];

  const guidelines = [
    {
      icon: <FileText className="w-6 h-6" style={{ color: "#1e8f26" }} />,
      title: "Format",
      description:
        "Maximum 300 words, structured format including objectives, methods, results, and conclusions",
    },
    {
      icon: <Calendar className="w-6 h-6" style={{ color: "#c12b23" }} />,
      title: "Deadline",
      description: "Submit your abstract by December 15, 2024",
    },
    {
      icon: <Award className="w-6 h-6" style={{ color: "#eacf34" }} />,
      title: "Recognition",
      description:
        "Best abstract awards in multiple categories with publication opportunities",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#1e8f26" }}>
            Call for Abstracts
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded mb-6"
            style={{ backgroundColor: "#c12b23" }}
          ></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Share your research at PharmaNest 2024. We invite submissions
            exploring the intersection of artificial intelligence, machine
            learning, and pharmaceutical sciences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Topics */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <BookCopy
                  className="w-8 h-8 mr-3"
                  style={{ color: "#1e8f26" }}
                />
                <h3 className="text-2xl font-semibold">Research Topics</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ArrowRight
                      className="w-5 h-5 mr-2 flex-shrink-0"
                      style={{ color: index % 2 === 0 ? "#1e8f26" : "#c12b23" }}
                    />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Guidelines */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileCheck
                  className="w-8 h-8 mr-3"
                  style={{ color: "#c12b23" }}
                />
                <h3 className="text-2xl font-semibold">
                  Submission Guidelines
                </h3>
              </div>

              <div className="space-y-6">
                {guidelines.map((guideline, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="mr-4 mt-1">{guideline.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{guideline.title}</h4>
                      <p className="text-gray-600">{guideline.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-green-50 to-yellow-50 shadow-xl">
            <CardContent className="p-8">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1e8f26" }}
              >
                Ready to Submit Your Abstract?
              </h3>
              <p className="text-gray-700 mb-6">
                Join leading researchers and share your innovations with the
                pharmaceutical community.
              </p>
              <div className="space-x-4">
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: "#1e8f26" }}
                >
                  Submit Abstract
                </button>
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: "#c12b23" }}
                >
                  View Guidelines
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallForAbstracts;