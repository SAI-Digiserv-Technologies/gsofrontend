import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/Images/image.jpg";
import { useTranslation } from "react-i18next";

function AboutSession() {
const {t, i18n} = useTranslation();

  return (
    <section className="bg-[#0b2b42] text-white py-12 px-4 md:py-16 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {" "}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 f7"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {t("about.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-justify f4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-4 f4">
              {t("about.p1")}
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4 f4">
              {t("about.p2")}
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Background shape only for medium+ screens */}
            <div className="hidden md:block absolute -top-3 left-20 bg-[#22c5dc] w-[60%] h-[90%] rounded-xl"></div>
            <img
              src={image}
              alt="Alcoholics Anonymous chairs"
              className="relative rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSession;
