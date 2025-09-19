import React from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-[#0b2b42] py-16 px-6 md:px-16 relative overflow-hidden">
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
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-white flex flex-col text-justify h-full">
          <h2 className="font-extrabold leading-[1.05] text-[70px] md:text-[90px] lg:text-[160px] tracking-tight text-white">
            <span className="block text-4xl sm:hidden">Join With Us</span>

            <span className="hidden sm:block">
              Jo
              <span className="relative inline-flex items-center">
                <span className="bg-[#22c5dc] px-3 py-1 rounded-lg text-[#0b2b42] ml-10">
                  in <br />
                  th
                </span>
              </span>
              <span className="block -mt-20 md:-mt-28 lg:-mt-40">Wi</span>
              <span className="block">Us</span>
            </span>
          </h2>
          <p className="mt-6 text-sm md:text-base text-gray-300 max-w-xs leading-relaxed">
            The details that you provide below is only for contact purposes & it
            will be maintained strictly anonymous.{" "}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-10 text-justify ">
          <h3 className="text-5xl font-bold text-center text-[#0b2b42] mb-6 f8">
            {t("form.title")}
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-[#0b2b42] mb-2 f7">
                {t("form.name")}
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-[#178c8c] bg-transparent f4"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#0b2b42] mb-2 f7">
                {t("form.email")}
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-[#178c8c] bg-transparent f4"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#0b2b42] mb-2 f7">
                {t("form.phone")}
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none focus:border-[#178c8c] bg-transparent f4"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#0b2b42] mb-2 f7">
                {t("form.message")}
              </label>
              <textarea
                rows={3}
                className="w-full border border-gray-400 rounded-lg focus:outline-none focus:border-[#178c8c] p-3 bg-gray-50 f4"
              ></textarea>
            </div>
            <div className="flex justify-center pt-4 f7">
              <button
                type="submit"
                className="bg-[#0b2b42] hover:bg-[#178c8c] text-white font-semibold py-3 px-12 rounded-full shadow-md transition-all duration-300 f4"
              >
                {t("form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
