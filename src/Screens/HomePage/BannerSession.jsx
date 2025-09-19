import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/Images/banneriamge.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Banner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isTamil = i18n.language === "ta";
  return (
    <section className="bg-[#012b47] text-white relative overflow-hidden py-12 sm:py-16 md:py-24">
      <motion.div
        className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#0891b2] rounded-full opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-6 sm:bottom-12 left-20 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="16" r="3" fill="#22c5dc" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left gap-8 lg:gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold leading-tight space-y-6 relative">
              <span
                className={`block tracking-wide f6 ${
                  isTamil
                    ? "text-2xl sm:text-4xl md:text-5xl lg:text-7xl"
                    : "text-3xl sm:text-5xl md:text-6xl lg:text-8xl"
                }`}
              >
                {t("banner.title1")}
              </span>

              <span
                className="absolute top-8 left-1/2 sm:top-12 sm:left-72 -translate-x-1/2 
                w-8 h-8 sm:w-12 sm:h-12 md:w-28 md:h-28 
                bg-[#22c5dc] rounded-full opacity-70 -z-10"
              />

              <span
                className={`block tracking-wide f6 ${
                  isTamil
                    ? "text-2xl sm:text-4xl md:text-5xl lg:text-7xl"
                    : "text-3xl sm:text-5xl md:text-6xl lg:text-8xl"
                }`}
              >
                {t("banner.title2")}
              </span>

              <span
                className={`block font-extrabold tracking-tight whitespace-nowrap f6 ${
                  isTamil
                    ? "text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
                    : "text-3xl sm:text-5xl md:text-6xl lg:text-8xl"
                }`}
              >
                {t("banner.title3")}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10"></span>
                  <span className="absolute top-full -mt-6 h-4 sm:h-8 md:h-12 w-28 sm:w-[200px] bg-[#22c5dc] rounded-full opacity-80 -z-10 left-1/2 -translate-x-1/2 -ml-[130px]" />
                </span>
              </span>
            </h1>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 f8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 f8">
                <button
                  className="bg-white text-[#012b47] font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 f7"
                  onClick={() => navigate("/selftest")}
                >
                  {t("banner.btn1")}
                </button>
                <button
                  className="bg-white text-[#012b47] font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 f7"
                  onClick={() => navigate("/contact")}
                >
                  {t("banner.btn2")}
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-end mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-[270px] sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src={image}
                  alt="People celebrating"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -inset-2 md:border-2 border-[#22c5dc] rounded-[1rem] opacity-70"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
