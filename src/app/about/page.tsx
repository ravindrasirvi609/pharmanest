import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#070B39] bg-opacity-90 relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-gradient-to-r from-[#FF3366] to-[#FF9966] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-r from-[#9900FF] to-[#FF66CC] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#00CCFF]">
              About Us
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Learn more about the{" "}
            <span className="text-white font-semibold">
              Operant Pharmacy Federation (OPF)
            </span>{" "}
            and the initiatives we proudly support, including our breakthrough
            platform, <span className="text-white font-semibold">CHIPS</span>.
          </p>
        </div>

        {/* About Chips Section */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 mb-12 shadow-[0_0_30px_rgba(0,204,255,0.1)]">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/chips.png"
                  alt="About Chips"
                  className="object-cover w-full"
                  width={540}
                  height={360}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#FF9966]">
                About CHIPS
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-white font-semibold">
                    Chebrolu Hanumaiah Institute of Pharmaceutical Sciences
                    (CHIPS)
                  </span>{" "}
                  was established in 2005 by the Nagarjuna Education Society
                  (NES). Offering B.Pharmacy, M.Pharmacy, Pharm.D, and Ph.D
                  programs, CHIPS has a student strength of 648 and boasts
                  excellent infrastructure.
                </p>
                <p className="leading-relaxed">
                  The institution is recognized by UGC and accredited by NAAC
                  with a B++ grade. It has received Autonomous Status from UGC
                  and is ISO certified. CHIPS has a strong research focus, with
                  47 Ph.D. scholars and over 300 published research papers.
                </p>
                <p className="leading-relaxed">
                  With a dedicated faculty, CHIPS ensures quality education,
                  achieving an average pass percentage of over 95%.
                  Approximately 70% of students secure placements through the
                  Training and Placement Cell.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About OPF Section */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 mb-12 shadow-[0_0_30px_rgba(0,204,255,0.1)]">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#00CCFF]">
                About Operant Pharmacy Federation (OPF)
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Operant Pharmacy Federation (OPF) is committed to advancing
                  the{" "}
                  <span className="text-white font-semibold">
                    pharmacy profession
                  </span>{" "}
                  by hosting exhibitions, conferences, workshops, and more. With
                  an international reputation in biomedical and pharmaceutical
                  studies, OPF serves as a hub for high-quality research,
                  education forums, ethical discussions, and collaboration
                  across the globe.
                </p>
                <p className="leading-relaxed">
                  At OPF, we prioritize{" "}
                  <span className="text-white font-semibold">
                    global healthcare impact
                  </span>{" "}
                  by fostering research, community wellness, and ethical
                  business practices. Our goal is to promote innovations in the{" "}
                  <span className="text-white font-semibold">
                    pharmaceutical industry
                  </span>
                  , benefiting both professionals and the wider community.
                </p>
                <p className="leading-relaxed">
                  We are proud to assist researchers in their dissertation work,
                  providing support through{" "}
                  <span className="text-white font-semibold">
                    editorial services
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-semibold">
                    publication opportunities
                  </span>
                  . Our open-access research papers empower students and
                  professionals to stay informed about industry advancements.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/opflogo.png"
                  alt="About OPF"
                  className="object-cover w-full"
                  width={540}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(0,204,255,0.1)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#9900FF] to-[#FF66CC]">
              Why Choose OPF?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,204,255,0.3)]">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#00FFCC] to-[#00CCFF] flex items-center justify-center mx-auto">
                <span className="text-[#070B39] text-2xl">🌍</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-center text-white">
                Global Reach
              </h4>
              <p className="text-gray-300 text-center">
                Connecting researchers and professionals across borders to
                collaborate and innovate.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,204,255,0.3)]">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#FF3366] to-[#FF9966] flex items-center justify-center mx-auto">
                <span className="text-[#070B39] text-2xl">📚</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-center text-white">
                Knowledge Sharing
              </h4>
              <p className="text-gray-300 text-center">
                Open access to high-quality research and resources for
                professionals and students.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,204,255,0.3)]">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#9900FF] to-[#FF66CC] flex items-center justify-center mx-auto">
                <span className="text-[#070B39] text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-center text-white">
                Innovative Tools
              </h4>
              <p className="text-gray-300 text-center">
                Cutting-edge solutions like CHIPS for research, analytics, and
                drug development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
