"use client";
import React, { useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

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
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="w-5 h-5 text-gray-400" />
        </div>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={`w-full pl-10 pr-3 py-3 border-2 rounded-lg shadow-sm ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
        } focus:outline-none focus:ring-2`}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <AlertTriangle className="w-5 h-5 text-red-500" />
        </div>
      )}
    </div>
    {error && (
      <p className="text-red-500 text-sm mt-1 flex items-center">
        <AlertTriangle className="w-4 h-4 mr-2" /> {error}
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch with Us</h1>
          <p className="text-lg">
            We are here to answer your questions and provide support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
              {isSubmitted ? (
                <div className="p-6 bg-green-100 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <p>Message sent successfully!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatedInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Full Name"
                    error={errors.name}
                  />
                  <AnimatedInput
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="Email Address"
                    error={errors.email}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full border-2 rounded-lg p-4"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-6 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149224.96671255704!2d80.17231959726561!3d16.2526181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a76e3229a1b83%3A0xb859ed4d0357991e!2sChebrolu%20Hanumaiah%20Institute%20Of%20Pharmaceutical%20Sciences%20(Autonomous)!5e1!3m2!1sen!2sin!4v1733415175167!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
