import React from "react";
import { motion } from "framer-motion";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const StepsPage = () => {
  const steps = [
    "We admitted we were powerless over alcohol — that our lives had become unmanageable.",
    "Came to believe that a Power greater than ourselves could restore us to sanity.",
    "Made a decision to turn our will and our lives over to the care of God as we understood Him.",
    "Made a searching and fearless moral inventory of ourselves.",
    "Admitted to God, to ourselves, and to another human being the exact nature of our wrongs.",
    "Were entirely ready to have God remove all these defects of character.",
    "Humbly asked Him to remove our shortcomings.",
    "Made a list of all persons we had harmed, and became willing to make amends to them all.",
    "Made direct amends to such people wherever possible, except when to do so would injure them or others.",
    "Continued to take personal inventory and when we were wrong promptly admitted it.",
    "Sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.",
    "Having had a spiritual awakening as the result of these Steps, we tried to carry this message to alcoholics, and to practice these principles in all our affairs."
  ];

  return (
    <>
    <Header/>
    <section className="bg-[#0b2b42] py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-cyan-700 mb-12">
         Unity
        </h1>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-cyan-600 hover:shadow-lg"
            >
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
    <Footer/>
    </>
  );
};

export default StepsPage;
