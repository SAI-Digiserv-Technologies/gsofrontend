// src/pages/Contact.jsx
import React, { useState } from "react";
import axios from "axios";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await axios.post("/api/contact", formData);
      setResponse({ type: "success", message: res.data.message });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setResponse({
        type: "error",
        message:
          err.response?.data?.error || "Something went wrong. Try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-[#0b2b42] py-12 px-4 sm:px-8 md:px-16 relative overflow-hidden">
        {/* background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="1.5" fill="#22c5dc" opacity="0.3" />
              </pattern>
              <pattern
                id="lines"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,60 L120,60 M60,0 L60,120"
                  stroke="#22c5dc"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            <rect width="100%" height="100%" fill="url(#lines)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="text-white flex flex-col text-center md:text-left">
            <h2 className="font-extrabold leading-tight tracking-tight text-white">
              {" "}
              <span className="block text-4xl sm:hidden">Join With Us</span>
              <span className="hidden sm:block text-6xl md:text-8xl lg:text-[160px]">
                Jo
                <span className="relative inline-flex items-center">
                  <span className="bg-[#22c5dc] px-2 py-1 rounded-lg text-[#0b2b42] lg:ml-10 sm:ml-6">
                    in <br />
                    th
                  </span>
                </span>
                <span className="block -mt-20 md:-mt-32 lg:-mt-40">Wi</span>
                <span className="block">Us</span>
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 max-w-sm mx-auto md:mx-0 leading-relaxed">
              The details that you provide below are only for contact purposes &
              will be maintained strictly anonymous.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 text-justify">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0b2b42] mb-6">
              Form
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-base sm:text-lg font-semibold text-[#0b2b42] ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-[#178c8c] bg-transparent py-2"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg font-semibold text-[#0b2b42] ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-[#178c8c] bg-transparent py-2"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg font-semibold text-[#0b2b42] ">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-[#178c8c] bg-transparent py-2"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg font-semibold text-[#0b2b42] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full border border-gray-400 rounded-lg focus:outline-none focus:border-[#178c8c] p-3 bg-gray-50"
                ></textarea>
              </div>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#0b2b42] hover:bg-[#178c8c] text-white font-semibold py-3 px-10 rounded-full shadow-md transition-all duration-300"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
              {response && (
                <p
                  className={`text-center mt-3 font-semibold ${
                    response.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {response.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
