"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, AlertTriangle, Clock } from "lucide-react";

// Custom animated input component
const AnimatedInput = ({
  type,
  name,
  value,
  onChange,
  error,
  label,
  icon: Icon,
}: {
  type: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}) => (
  <div className="relative mb-6">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {Icon && <Icon className="w-5 h-5 text-gray-400" />}
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className={`
        w-full pl-10 pr-3 py-3 
        border-2 rounded-lg 
        transition duration-300 
        ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
        }
        bg-gray-50 
        focus:outline-none 
        focus:ring-2
      `}
    />
    {error && (
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <AlertTriangle className="w-5 h-5 text-red-500" />
      </div>
    )}
    {error && (
      <p className="text-red-500 text-sm mt-1 flex items-center">
        <AlertTriangle className="w-4 h-4 mr-1" /> {error}
      </p>
    )}
  </div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = { name: "", email: "", message: "" };

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = "Your message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      try {
        // Simulated form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", formData);

        // Reset form
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      } catch (err) {
        console.error(err);
        alert("Failed to send message. Please try again.");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-3 gap-8 p-8">
        {/* Contact Information Section */}
        <div className="md:col-span-1 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-blue-100 mb-6">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-7 h-7 text-blue-200" />
              <div>
                <p className="text-sm text-blue-100">Email</p>
                <a
                  href="mailto:conferences@opf.org.in"
                  className="text-white hover:underline"
                >
                  conferences@opf.org.in
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-7 h-7 text-blue-200" />
              <div>
                <p className="text-sm text-blue-100">Phone</p>
                <a
                  href="tel:+919460971652"
                  className="text-white hover:underline"
                >
                  +91 94609-71652
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-7 h-7 text-blue-200" />
              <div>
                <p className="text-sm text-blue-100">Address</p>
                <p className="text-white">CHIPS, Guntur</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-7 h-7 text-blue-200" />
              <div>
                <p className="text-sm text-blue-100">Hours</p>
                <p className="text-white">Mon-Fri: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:col-span-2 p-4 md:p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                label="Full Name"
                error={errors.name}
                icon={undefined}
              />

              <AnimatedInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email Address"
                error={errors.email}
                icon={undefined}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className={`
                  w-full px-4 py-3 
                  border-2 rounded-lg 
                  transition duration-300 
                  ${
                    errors.message
                      ? "border-red-500 focus:ring-red-300"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
                  }
                  bg-gray-50 
                  focus:outline-none 
                  focus:ring-2
                `}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-1" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-4 rounded-lg 
                flex items-center justify-center 
                text-white font-semibold 
                transition duration-300 
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
