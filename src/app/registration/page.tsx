import RegistrationPlans from "@/components/RegistrationPlans";
import Link from "next/link";
import React from "react";

const Registration = () => {
  return (
    <div
      className="bg-gradient-to-r from-green-50 via-yellow-50 to-red-50 px-6 py-12"
      style={{ backgroundColor: "#eacf34" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#1e8f26" }}
        >
          Registration
        </h1>

        {/* Content */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-justify mb-4">
            <strong>Registrations for PharmaNEST 2024</strong> began on{" "}
            <strong>1st December 2024</strong>.
          </p>

          {/* Registration Option */}
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ color: "#c12b23" }}
          >
            Registration Options
          </h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Online registration is now open, and{" "}
            <strong>registration is mandatory</strong>
            to participate in PharmaNEST. Candidates must register by filling
            out the online form available on our official website.
          </p>

          {/* Cancellation Policy */}
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "#1e8f26" }}
          >
            Cancellation and Refund Policy
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            The amount paid for registration is <strong>non-refundable</strong>{" "}
            and
            <strong>non-transferable</strong>.
          </p>

          {/* Important Instructions */}
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "#1e8f26" }}
          >
            Important Instructions
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            The <strong>registration fee</strong> includes:
          </p>
          <ul className="list-disc ml-6 text-lg text-gray-800 mb-4">
            <li>Entry to all scientific sessions</li>
            <li>Conference kit</li>
            <li>Lunch and refreshments</li>
          </ul>

          {/* Payment */}
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "#c12b23" }}
          >
            Mode of Payment
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            All payments must be made online through our secure{" "}
            <strong>website payment gateway</strong>.
          </p>

          {/* Accommodation */}
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "#1e8f26" }}
          >
            Accommodation
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Accommodation will be arranged on request in{" "}
            <strong>dormitories or hotels</strong> at additional charges. For
            more details, please write to us at:{" "}
            <Link
              href="mailto:conferences@opf.org.in"
              className="text-accent underline"
              style={{ color: "#c12b23" }}
            >
              conferences@opf.org.in
            </Link>
          </p>

          {/* Early Bird Offer */}
          <p
            className="text-lg leading-relaxed text-justify font-bold mb-4"
            style={{ color: "#1e8f26" }}
          >
            <strong>Early Bird Offer:</strong> Valid until{" "}
            <strong>November 30, 2024</strong>.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            All prices mentioned are <strong>inclusive of GST</strong>.
          </p>
        </div>

        {/* Registration Plans */}
        <RegistrationPlans />
      </div>
    </div>
  );
};

export default Registration;
