import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#1e8f26" }}>
            About Us
          </h1>
          <div
            className="w-24 h-1 mx-auto rounded mb-6"
            style={{ backgroundColor: "#c12b23" }}
          ></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn more about the{" "}
            <strong>Operant Pharmacy Federation (OPF)</strong> and the
            initiatives we proudly support, including our breakthrough platform,
            Learn more about the{" "}
            <strong>Operant Pharmacy Federation (OPF) </strong>and the{" "}
            <strong>CHIPS</strong>.
          </p>
        </div>

        {/* About OPF Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "#1e8f26" }}
              >
                About Operant Pharmacy Federation (OPF)
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Operant Pharmacy Federation (OPF) is committed to advancing the
                <strong> pharmacy profession </strong> by hosting exhibitions,
                conferences, workshops, and more. With an international
                reputation in biomedical and pharmaceutical studies, OPF serves
                as a hub for high-quality research, education forums, ethical
                discussions, and collaboration across the globe.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At OPF, we prioritize <strong> global healthcare impact</strong>{" "}
                by fostering research, community wellness, and ethical business
                practices. Our goal is to promote innovations in the
                <strong>pharmaceutical industry</strong>, benefiting both
                professionals and the wider community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are proud to assist researchers in their dissertation work,
                providing support through <strong>editorial services </strong>{" "}
                and <strong>publication opportunities </strong>. Our open-access
                research papers empower students and professionals to stay
                informed about industry advancements.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/opflogo.png"
                  alt="About OPF"
                  className="object-cover"
                  width={640}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Chips Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative order-last lg:order-first">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/chips.png"
                  alt="About Chips"
                  className="object-cover"
                  width={640}
                  height={360}
                />
              </div>
            </div>
            <div>
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: "#c12b23" }}
              >
                About CHIPS
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>
                  CHIPS (Collaborative Healthcare Innovations and Pharmaceutical
                  Solutions)
                </strong>{" "}
                is a flagship initiative by OPF, designed to accelerate
                innovation in healthcare and pharmaceuticals. CHIPS serves as a
                collaborative platform for{" "}
                <strong>
                  researchers, healthcare professionals, and industry leaders
                </strong>
                to share knowledge and drive advancements in pharmaceutical
                sciences.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The platform offers tools and resources to support{" "}
                <strong>AI-driven drug discovery </strong>,{" "}
                <strong>machine learning models</strong>, and{" "}
                <strong>data analytics</strong>
                for enhanced decision-making. By connecting professionals across
                disciplines, CHIPS ensures a future of smarter, more efficient
                healthcare solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through CHIPS, we aim to make research more accessible and
                actionable, encouraging breakthroughs that improve lives
                worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-red-50 py-12 px-6 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#1e8f26" }}
            >
              Why Choose OPF?
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded mb-6"
              style={{ backgroundColor: "#eacf34" }}
            ></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#1e8f26" }}
              >
                <i className="text-white text-2xl">🌍</i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
              <p className="text-gray-600">
                Connecting researchers and professionals across borders to
                collaborate and innovate.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#c12b23" }}
              >
                <i className="text-white text-2xl">📚</i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Knowledge Sharing</h4>
              <p className="text-gray-600">
                Open access to high-quality research and resources for
                professionals and students.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#eacf34" }}
              >
                <i className="text-white text-2xl">🚀</i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Innovative Tools</h4>
              <p className="text-gray-600">
                Cutting-edge solutions like CHIPS for research, analytics, and
                drug development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
