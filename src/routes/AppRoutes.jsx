import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Discover from "../pages/Discover";
import ContactUs from "../pages/ContactUs";
import LongTerm from "../pages/LongTerm";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/longtermform" element={<LongTerm />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
