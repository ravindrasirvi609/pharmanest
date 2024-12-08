import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-green-700">About Us</h1>
          <div className="w-32 h-1 mx-auto rounded mb-6 bg-red-600"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn more about the{" "}
            <strong>Operant Pharmacy Federation (OPF)</strong> and the
            initiatives we proudly support, including our breakthrough platform,{" "}
            <strong>CHIPS</strong>.
          </p>
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
                  width={340}
                  height={360}
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-semibold mb-4 text-red-600">
                About CHIPS
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>
                  Chebrolu Hanumaiah Institute of Pharmaceutical Sciences
                  (CHIPS)
                </strong>{" "}
                was established in 2005 by the Nagarjuna Education Society
                (NES). Offering B.Pharmacy, M.Pharmacy, Pharm.D, and Ph.D
                programs, CHIPS has a student strength of 648 and boasts
                excellent infrastructure.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The institution is recognized by UGC and accredited by NAAC with
                a B++ grade. It has received Autonomous Status from UGC and is
                ISO certified. CHIPS has a strong research focus, with 47 Ph.D.
                scholars and over 300 published research papers.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With a dedicated faculty, CHIPS ensures quality education,
                achieving an average pass percentage of over 95%. Approximately
                70% of students secure placements through the Training and
                Placement Cell.
              </p>
            </div>
          </div>
        </div>

        {/* About OPF Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-4 text-green-700">
                About Operant Pharmacy Federation (OPF)
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Operant Pharmacy Federation (OPF) is committed to advancing the{" "}
                <strong>pharmacy profession</strong> by hosting exhibitions,
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

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-green-50 via-yellow-50 to-red-50 py-12 px-6 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-green-700">
              Why Choose OPF?
            </h2>
            <div className="w-16 h-1 mx-auto rounded mb-6 bg-yellow-500"></div>
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
