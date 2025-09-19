import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Handshake,
  HelpCircle,
  Lightbulb,
  Users,
  Bot,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function ServicesSection() {
  const { t, i18n } = useTranslation();
  const services = [
    {
      icon: Star,
      title: t("experience.title"),
      description: t("experience.desc"),
    },
    {
      icon: Handshake,
      title: t("meeting.title"),
      description: t("meeting.desc"),
    },
    {
      icon: HelpCircle,
      title: t("new.title"),
      description: t("new.desc"),
    },
    {
      icon: Lightbulb,
      title: t("hope.title"),
      description: t("hope.desc"),
    },
    {
      icon: Users,
      title: t("support.title"),
      description: t("support.desc"),
    },
    {
      icon: Bot,
      title: t("service.title"),
      description: t("service.desc"),
    },
  ];
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <section className="bg-[#0b2b42] py-20 px-10 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="dots-services"
              x="0"
              y="0"
              width="40"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="#22c5dc" opacity="0.3" />
            </pattern>
            <pattern
              id="lines-services"
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
          <rect width="100%" height="100%" fill="url(#dots-services)" />
          <rect width="100%" height="100%" fill="url(#lines-services)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group cursor-pointer"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariant}
              >
                {/* Top Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#046b7e] to-[#178c8c] rounded-t-2xl p-8 text-center transition-all duration-300 f4"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4"
                  >
                    <IconComponent className="w-8 h-8 text-[#0b2b42]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white f8">
                    {service.title}
                  </h3>
                </motion.div>

                {/* Bottom Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-b-2xl p-8 shadow-lg transition-all duration-300 group-hover:shadow-xl"
                >
                  <p className="text-[#178c8c] text-center font-medium leading-relaxed f4">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
