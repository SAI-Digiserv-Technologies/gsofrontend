import React from "react";
import { motion } from "framer-motion";
import aboutbanner from "../../assets/Images/aboutbanner.png";
import dotPattern from "../../assets/Images/Rectangle 37.png";
import { useTranslation } from "react-i18next";

function AboutSession() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-[#0b2b42] text-white py-8 sm:py-12 md:py-16 lg:py-5 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute top-0 left-0 w-full sm:w-1/2 h-full opacity-10 sm:opacity-20"
        style={{
          backgroundImage: `url(${dotPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-2 xl:px-3">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {t('aboutaa.title')} <span className="text-cyan-400">{t('aboutaa.title1')}</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-cyan-400 rounded-full"></div>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 text-justify">
              {t("aboutaa.p1")}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 text-justify">
              {t("aboutaa.p2")}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 text-justify">
              {t("aboutaa.p3")}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 text-justify">
              {t("aboutaa.p4")}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 text-justify">
              {t("aboutaa.p5")}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100 text-justify">
              {t("aboutaa.p6")}
            </p>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="flex justify-center lg:justify-end relative z-10 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutbanner}
                  alt="About AA - Recovery Journey"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -inset-1 sm:-inset-2 border border-cyan-400 sm:border-2 rounded-2xl opacity-70"></div>
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-cyan-400 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400 rounded-full opacity-30 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSession;
