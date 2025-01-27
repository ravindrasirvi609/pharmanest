import React from "react";
import Image from "next/image";

interface Speaker {
  id: number;
  name: string;
  designation: string;
  image: string;
  role?: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Montukumar M. Patel",
    designation: "President, Pharmacy Council of India",
    image: "/speakers/montukumar-patel.jpg",
  },
  {
    id: 2,
    name: "Dr. T. V. Narayana",
    designation:
      "President, AP Private Pharmacy Colleges Managements Association & Imm. Past President, Indian Pharmaceutical Association",
    image: "/speakers/tv-narayana.jpg",
  },
  {
    id: 3,
    name: "Dr. M. Venkata Ramana",
    designation: "EC Member, Pharmacy Council of India",
    image: "/speakers/venkata-ramana.jpg",
  },
  {
    id: 4,
    name: "Dr. M. Niranjan Babu",
    designation: "Member, Pharmacy Council of India",
    image: "/speakers/niranjan-babu.jpg",
  },
  {
    id: 5,
    name: "Dr. S. L. N. Prasada Reddy",
    designation: "Member, Pharmacy Council of India",
    image: "/speakers/prasada-reddy.jpg",
  },
  {
    id: 6,
    name: "Dr. M. Radha Krishna Murthy",
    designation: "Member, Pharmacy Council of India",
    image: "/speakers/radha-krishna.jpg",
  },
  {
    id: 7,
    name: "Dr. William Carey",
    designation: "Registrar, AP Pharmacy Council",
    image: "/speakers/william-carey.jpg",
  },
];

const SpeakersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-slate-900 mb-16">
          Our Distinguished <span className="text-blue-600">Speakers</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-out"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-3xl">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {speaker.name}
                  </h3>
                  {speaker.role && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                      {speaker.role}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                  {speaker.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
