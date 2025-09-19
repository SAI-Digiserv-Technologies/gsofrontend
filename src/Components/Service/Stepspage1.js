import React from "react";
import { motion } from "framer-motion";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const StepsPage1 = () => {
    const steps = [
        'Our common welfare should come first; personal recovery depends upon A.A. unity',
        'For our group purpose there is but one ultimate authority — a loving God as He may express Himself in our group conscience. Our leaders are but trusted servants; they do not govern',
        'The only requirement for A.A. membership is a desire to stop drinking',
        'Each group should be autonomous except in matters affecting other groups or A.A. as a whole',
        'Each group has but one primary purpose — to carry its message to the alcoholic who still suffers',
        ' An A.A. group ought never endorse, finance, or lend the A.A. name to any related facility or outside enterprise, lest problems of money, property, and prestige divert us from our primary purpose',
        ' Every A.A. group ought to be fully self-supporting, declining outside contributions.',
        'Alcoholics Anonymous should remain forever non-professional, but our service centers may employ special workers.',
        'A.A., as such, ought never be organized; but we may create service boards or committees directly responsible to those they serve.',
        'Alcoholics Anonymous has no opinion on outside issues; hence the A.A. name ought never be drawn into public controversy.',
        'Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, and films.',
        'Anonymity is the spiritual foundation of all our traditions, ever reminding us to place principles before personalities.'
    ];
    return (
        <>
            <Header />
            <section className="bg-[#0b2b42] py-16 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-cyan-700 mb-12">
                        Recovery
                    </h1>
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
            <Footer />
        </>
    );
};
export default StepsPage1;
