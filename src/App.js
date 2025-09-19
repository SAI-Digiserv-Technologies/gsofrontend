import React from "react";
import { useTranslation } from "react-i18next";
import ReactRouter from "./router";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="flex justify-end gap-3 p-4 bg-gray-200">
        <button
          onClick={() => changeLanguage("en")}
          className="px-3 py-1 border rounded"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("ta")}
          className="px-3 py-1 border rounded"
        >
          🇮🇳 தமிழ்
        </button>
      </div>
      <ReactRouter />
    </>
  );
}

export default App;
