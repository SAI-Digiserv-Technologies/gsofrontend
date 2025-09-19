import React from "react";
import { motion } from "framer-motion";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const StepsPage2 = () => {
    const steps = [
        ' Final responsibility and ultimate authority for A.A. world services should always reside in the collective conscience of our whole Fellowship',
        'The General Service Conference of A.A. has become, for nearly every practical purpose, the active voice and the effective conscience of our whole society in its world affairs.',
        'To insure effective leadership, we should endow each element of A.A.—the Conference, the General Service Board and its service corporations, staffs, committees, and executives—with a traditional “Right of Decision.',
        'At all responsible levels, we ought to maintain a traditional “Right of Participation,” allowing a voting representation in reasonable proportion to the responsibility that each must discharge.',
        'Throughout our structure, a traditional “Right of Appeal” ought to prevail, so that minority opinion will be heard and personal grievances receive careful consideration.',
        'The Conference recognizes that the chief initiative and active responsibility in most world service matters should be exercised by the trustee members of the Conference acting as the General Service Board.',
        'The Charter and Bylaws of the General Service Board are legal instruments, empowering the trustees to manage and conduct world service affairs. The Conference Charter is not a legal document; it relies upon tradition and the A.A. purse for final effectiveness.',
        'The trustees are the principal planners and administrators of over-all policy and finance. They have custodial oversight of the separately incorporated and constantly active services, exercising this through their ability to elect all the directors of these entities. ',
        'Good service leadership at all levels is indispensable for our future functioning and safety. Primary world service leadership, once exercised by the founders, must necessarily be assumed by the trustees. ',
        'Every service responsibility should be matched by an equal service authority, with the scope of such authority well defined.',
        'The trustees should always have the best possible committees, corporate service directors, executives, staffs, and consultants. Composition, qualifications, induction procedures, and rights and duties will always be matters of serious concern',
        'The Conference shall observe the spirit of A.A. tradition, taking care that it never becomes the seat of perilous wealth or power; that sufficient operating funds and reserve be its prudent financial principle; that it place none of its members in a position of unqualified authority over others; that it reach all important decisions by discussion, vote, and whenever possible, substantial unanimity; that its actions never be personally punitive nor an incitement to public controversy; that it never perform acts of government; that, like the Society it serves, it will always remain democratic in thought and action.'
    ];

    return (
        <>
            <Header />
            <section className="bg-[#0b2b42] py-16 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-cyan-700 mb-12">
                        Service
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

export default StepsPage2;
