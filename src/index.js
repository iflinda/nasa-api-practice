/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Hero from "./pages/hero";
import Main from "./pages/main";
import "./styles/global.css";

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Hero />} />
                <Route path="/main/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    </div>,
    document.getElementById("root")
);
