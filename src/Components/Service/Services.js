import React from "react";
import { Users, Heart, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Principles = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const icons = [
    <Users className="w-14 h-14 text-cyan-500" />,
    <Heart className="w-14 h-14 text-pink-500" />,
    <Handshake className="w-14 h-14 text-emerald-500" />,
  ];

  const items = t("principles.items", { returnObjects: true });

  return (
    <section className="relative bg-[#0b2b42] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-14">
          <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            {t("principles.title")}
          </span>
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => item.href && navigate(item.href)} 
            >
              <div className="flex justify-center mb-6">{icons[idx]}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
