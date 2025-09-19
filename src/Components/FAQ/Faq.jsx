import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

export default function Questionnaire({ onSubmit }) {
  const { t } = useTranslation();
  const questions = t("selftest.questions", { returnObjects: true });

  const questionsPerPage = 5;
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  function setAnswer(qIndex, value) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[qIndex] = value;
      return copy;
    });
  }

  function handlePrev() {
    setPage((p) => Math.max(0, p - 1));
  }

  function handleNext() {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  }

  function handleSubmit() {
    if (onSubmit) onSubmit(answers);
    else alert("Answers: " + JSON.stringify(answers));
  }

  const startIndex = page * questionsPerPage;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4 f4">
          {t("selftest.title")}
        </h2>
        <p className="text-base text-center text-red-700 mb-6 f6">
          {t("selftest.note")}
        </p>
        <div className="bg-[#032845] text-white rounded-2xl p-8 shadow-sm text-justify">
          <div className="space-y-8 f4">
            {currentQuestions.map((q, idx) => {
              const globalIndex = startIndex + idx;
              return (
                <div key={globalIndex} className="bg-[#032845] rounded-xl p-2">
                  <p className="font-medium text-white mb-3">{q}</p>
                  <div className="flex text-justify gap-4">
                    <button
                      onClick={() => setAnswer(globalIndex, "yes")}
                      className={
                        "px-6 py-2 rounded-lg border f5 " +
                        (answers[globalIndex] === "yes"
                          ? "bg-green-500 border-green-600 shadow-md"
                          : "bg-white/10 border-white/20 hover:bg-white/20")
                      }
                    >
                      {t("selftest.yes")}
                    </button>
                    <button
                      onClick={() => setAnswer(globalIndex, "no")}
                      className={
                        "px-6 py-2 rounded-lg border f5" +
                        (answers[globalIndex] === "no"
                          ? "bg-red-500 border-red-600 shadow-md"
                          : "bg-white/10 border-white/20 hover:bg-white/20")
                      }
                    >
                      {t("selftest.no")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="px-5 py-2 rounded-md bg-white/10 hover:bg-white/20 disabled:opacity-40"
            >
              {t("selftest.prev")}
            </button>
            {page < totalPages - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2 rounded-md bg-white/10 hover:bg-white/20"
              >
                {t("selftest.next")}
              </button>
            ) : (
              // <button
              //   onClick={handleSubmit}
              //   className="px-5 py-2 rounded-md bg-white text-blue-900 font-semibold hover:opacity-90"
              // >
                {/* {t("selftest.submit")} */}
              // </button>
            )}
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-lg mt-8 text-justify leading-relaxed">
          {t("selftest.bottomNote")}
        </p>
      </div>
      <Footer />
    </>
  );
}
