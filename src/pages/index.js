/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import LandingPage from "./landingPage";
import Images from "./images";
import "../styles/global.css";

ReactDOM.render(
    <div id="container">
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/images/" element={<Images />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>,
    document.getElementById("root")
);
