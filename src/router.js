import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./assets/scss/fonts.scss";
import About from "./Components/About/About";
import Meetings from "./Components/Meetinglist/Meetings";
import Daily from "./Components/DailyReflection/Daily";
import Faq from "./Components/FAQ/Faq";
import Contact from "./Components/Contact/Contact";
import StepsPage from "./Components/Service/Stepspage";
import StepsPage1 from "./Components/Service/Stepspage1";
import StepsPage2 from "./Components/Service/Stepspage2";

function ReactRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/dailyreflections" element={<Daily />} />
            <Route path="/selftest" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/steps' element={<StepsPage />} />
            <Route path='/steps1' element={<StepsPage1 />} />
            <Route path='/steps2' element={<StepsPage2 />} />
        </Routes>
    );
}

export default ReactRouter;
