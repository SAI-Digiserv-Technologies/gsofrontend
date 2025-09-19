import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TrustSection = () => {
  const { t } = useTranslation();

  const items = t("trust.items", { returnObjects: true });

  return (
    <section className="bg-[#062440] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 lg:mb-20 f4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("trust.title1")}{" "}
          <span className="bg-white text-[#062440] px-3 py-1 rounded-3xl">
            {t("trust.title2")}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20 text-center sm:text-left">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center sm:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold f8">
                {item.number}{" "}
                {item.suffix && (
                  <span className="text-lg sm:text-xl">{item.suffix}</span>
                )}
              </h3>
              <p className="text-xl sm:text-2xl font-medium f6 mt-2">
                {item.highlight ? (
                  <span className="bg-cyan-500 text-white rounded-lg px-2">
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
