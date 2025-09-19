import React from "react";
import logo from "../../../assets/Images/Logo AA.png";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

// Step 1: Navbar data
const navLinks = [
  { id: 1, label: "navbar.home", path: "/" },
  { id: 3, label: "navbar.about", path: "/about" },
  { id: 2, label: "navbar.reflections", path: "/dailyreflections" },
  { id: 4, label: "navbar.meetings", path: "/meetings" },
  { id: 5, label: "navbar.selftest", path: "/selftest" },
  { id: 7, label: "navbar.contact", path: "/contact" },
];
const isTamil = i18n.language === "ta";

const Header = () => {
 const {t, i18n} = useTranslation();

  return (
    <header className="sticky top-0 bg-[#032845] text-white shadow-md z-50">
      <div className="relative z-10 container mx-auto flex justify-between items-center py-3 px-3 md:px-16">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="AA Logo" className="w-72 h-20 object-contain" />
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8 text-sm font-semibold f4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`hover:text-cyan-400 cursor-pointer transition-colors duration-200 ${
                isTamil 
                ? "text-8xl"
                : "text-sm"  
                 }`}
              >
                <a href={link.path}>{t(link.label)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
