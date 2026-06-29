import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // 1. Core Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // 2. Newsletter Form State
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // 3. UI Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [newsletterStatus, setNewsletterStatus] = useState("");

  // Handle inputs dynamically for contact form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Contact Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    // Maps your local state keys to your EmailJS template fields
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone_number: formData.phone,
      message: formData.message,
    };

    // EmailJS credentials
    const SERVICE_ID = "service_7bk4z0b";
    const TEMPLATE_ID = "template_nryxu8t";
    const PUBLIC_KEY = "ahahcV8EvJ3hU83k0";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage({
            type: "success",
            text: "Thank you! Your message has been sent successfully.",
          });
          // Reset fields upon success
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatusMessage({
            type: "error",
            text: "Oops! Something went wrong. Please check your EmailJS configurations.",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Handle Newsletter Submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterStatus("Thank you for subscribing!");
    setNewsletterEmail("");
    
    setTimeout(() => setNewsletterStatus(""), 4000);
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] antialiased font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600"
          alt="Contact Banner"
          className="w-full h-full object-cover scale-101"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">Contact Us</h1>
            <p className="text-base md:text-lg font-light text-gray-200 tracking-wide max-w-xl">We'd Love To Hear From You</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f5f2] border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-all duration-300 border border-gray-100">
              <MapPin size={32} className="mx-auto mb-4 text-[#8B5E3C]" />
              <h3 className="font-serif font-semibold text-xl text-gray-800 mb-2">Address</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Mayur Vihar, New Delhi, India</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-all duration-300 border border-gray-100">
              <Phone size={32} className="mx-auto mb-4 text-[#8B5E3C]" />
              <h3 className="font-serif font-semibold text-xl text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-500 text-sm leading-relaxed">+91 8802628093</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-all duration-300 border border-gray-100">
              <Mail size={32} className="mx-auto mb-4 text-[#8B5E3C]" />
              <h3 className="font-serif font-semibold text-xl text-gray-800 mb-2">Email</h3>
              <p className="text-gray-500 text-sm break-words leading-relaxed">deepa100091@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-all duration-300 border border-gray-100">
              <Clock size={32} className="mx-auto mb-4 text-[#8B5E3C]" />
              <h3 className="font-serif font-semibold text-xl text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Mon - Sun : 9AM - 10PM</p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Send Us A Message
            </h2>
            <div className="w-12 h-[2px] bg-[#8B5E3C] mx-auto mt-4"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-3xl p-6 md:p-12 border border-gray-50"
          >
            {/* Status Banner Alert */}
            {statusMessage.text && (
              <div
                className={`mb-6 p-4 rounded-xl text-sm font-medium transition-all ${
                  statusMessage.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition"
              />
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black focus:ring-1 focus:ring-black transition resize-none"
              ></textarea>
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full sm:w-auto bg-black text-white px-10 py-3.5 rounded-xl hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium shadow-sm"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">Stay Connected</h2>
            <p className="text-gray-400 font-light text-sm md:text-base mb-8 max-w-md mx-auto">
              Subscribe to receive updates about new premium collections, trends and exclusive offers.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <div className="w-full sm:flex-1">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="px-5 py-3.5 rounded-xl text-black w-full bg-white outline-none focus:ring-2 focus:ring-gray-500 text-sm"
                />
              </div>
              <button type="submit" className="bg-white text-black px-8 py-3.5 rounded-xl font-medium hover:bg-gray-200 active:scale-[0.98] transition-all w-full sm:w-auto text-sm">
                Subscribe
              </button>
            </form>

            {/* Newsletter Alert status message */}
            {newsletterStatus && (
              <p className="text-green-400 mt-4 text-sm font-medium animate-fade-in">{newsletterStatus}</p>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;