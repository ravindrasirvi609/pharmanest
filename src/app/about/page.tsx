import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about our mission and values.
        </p>
      </header>
      <section className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-6">
          We strive to provide the best services to our customers.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
        </ul>
      </section>
      <footer className="mt-10">
        <p className="text-gray-600">
          Contact us at:{" "}
          <a
            href="mailto:info@example.com"
            className="text-blue-500 hover:underline"
          >
            info@example.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default About;
