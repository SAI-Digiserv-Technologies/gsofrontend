import React from "react";
import logo from "../../../assets/Images/Logo AA.png";
import qr from "../../../assets/Images/qraa.png";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-[#082237] text-white relative overflow-hidden">
      <div className="h-[1px] w-full bg-[#FFFFFF]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-2/3 h-full">
          <svg viewBox="0 0 800 400" className="w-full h-full opacity-10">
            <path
              d="M400,0 Q600,100 800,0 L800,400 L0,400 Q200,300 400,0 Z"
              fill="currentColor"
              className="text-blue-400"
            />
          </svg>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-3">
          <div className="space-y-6 sm:space-y-8">
            {/* AA Logo and Title */}
            {/* <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
                  <div className="text-[#082237] font-bold text-lg sm:text-xl">
                    <svg viewBox="0 0 60 60" className="w-12 h-12 sm:w-16 sm:h-16">
                      <circle cx="30" cy="30" r="28" fill="white" stroke="#082237" strokeWidth="2"/>
                      <text x="30" y="20" textAnchor="middle" className="text-xs font-bold fill-[#082237]">AA</text>
                      <circle cx="30" cy="35" r="8" fill="none" stroke="#082237" strokeWidth="1.5"/>
                      <path d="M22 35 L38 35 M30 27 L30 43" stroke="#082237" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold leading-tight">
                  ALCOHOLICS<br />
                  ANONYMOUS
                </h3>
                <p className="text-sm text-slate-300 mt-1">GSO South INDIA</p>
              </div>
            </div> */}
            <img src={logo} />
            <div className="space-y-6 text-sm sm:text-base text-slate-200 leading-relaxed text-justify">
              <p className={`font-medium" }`}>{t("footerpara.title")}</p>
              <p>{t("footerpara.subtitle")}</p>
            </div>

            <div className="flex justify-start">
              {/* <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white p-2 rounded-lg">
                <div className="w-full h-full bg-black relative">
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
                    {Array.from({ length: 64 }, (_, i) => (
                      <div
                        key={i}
                        className={`${
                          [0, 1, 2, 5, 6, 7, 8, 14, 16, 17, 18, 21, 22, 23, 24, 30, 32, 33, 34, 37, 38, 39, 40, 46, 48, 49, 50, 53, 54, 55, 56, 62].includes(i)
                            ? 'bg-black'
                            : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div> */}
              <img src={qr} className="w-32 h-32" />
            </div>
          </div>
          <nav aria-label="Footer" className="md:mx-auto text-justify f5">
            <h3 className="mb-6 sm:mb-8 text-2xl sm:text-2xl font-bold text-white text-justify">
              {t("footer.links")}
            </h3>

            <ul className="space-y-4 sm:space-y-6 text-slate-200 text-base sm:text-lg">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 block py-1"
                  href="/"
                >
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 block py-1"
                  href="/about"
                >
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 block py-1"
                  href="/events"
                >
                  {t("footer.reflections")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 block py-1"
                  href="/selftest"
                >
                  {t("footer.selftest")}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 block py-1"
                  href="/contact"
                >
                  {t("footer.contact")}
                </a>
              </li>

              <li>
                <a
                  className="hover:text-white transition-colors duration-200 block py-1 f4"
                  href="/meetings"
                >
                  {t("footer.meetings")}
                </a>
              </li>
            </ul>
          </nav>
          <div className="space-y-6 sm:space-y-8">
            <h2
              className={`text-justify${
                i18n.language === "ta"
                  ? "text-3xl sm:text-2xl f4"
                  : "text-lg sm:text-5xl f4"
              }`}
            >
              {t("footerparas.heading")}
              <br />
              {t("footerparas.heading1")}
              <br />
              {t("footerparas.heading3")}
            </h2>
            <p
              className={`font-medium ${
                i18n.language === "ta"
                  ? "text-lg sm:text-lg f4"
                  : "text-base sm:text-lg f4"
              }`}
            >
              {t("footerparas.responsibilityTitle")}
            </p>
            <p
              className={`${
                i18n.language === "ta"
                  ? "text-lg sm:text-base f4"
                  : "text-sm sm:text-base  f4"
              }`}
            >
              {t("footerparas.responsibilityText")}
            </p>

            <div className="space-y-4 text-slate-200 text-justify ">
              <div className="text-lg sm:text-xl font-bold text-white">
                {t("footerparas.helpline")}
              </div>
              <div className="text-sm sm:text-base leading-relaxed">
                <p className="font-medium">{t("footerparas.address")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-slate-600/50">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-300">
            ©Copyright 2021 Alcoholics Anonymous. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
