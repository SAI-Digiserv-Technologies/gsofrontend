import React from "react";
import { motion } from "framer-motion";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { useTranslation } from "react-i18next";

const StepsPage2 = () => {
    const { t } = useTranslation();
    const steps = t("stepspage2.list", { returnObjects: true });
    return (
        <>
            <Header />
            <section className="bg-[#0b2b42] py-16 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-cyan-700 mb-12">
                        {t("stepspage2.title")}
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                                className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-cyan-600 hover:shadow-lg">
                                <div className="flex items-start">
                                    <span className="text-2xl font-bold text-cyan-600 mr-3">
                                        {i + 1}.
                                    </span>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        {step}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default StepsPage2;
