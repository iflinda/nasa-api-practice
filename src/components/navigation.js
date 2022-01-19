import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Hero from "../pages/hero";
import Photos from "../pages/photos";
import Logo from "../images/logo.svg";
import Likes from "../images/likes.svg";
import "../styles/global.css";

export default function navigation() {
  return (
    <nav className="absolute bg-black flex justify-center h-logoNavHeight p-1 z-10">
      <ul className="flex justify-center w-screen">
        <Link to="/">
          <li key="hero">
            <img
              src={Logo}
              className="w-logoNavWidth h-logoNavHeight"
              alt="Spaceroid Logo"
            />
          </li>
        </Link>
        <Link to="/">
          <li key="hero">
            <img
              src={Likes}
              className="absolute w-likesWidth h-likesHeight right-8 top-5"
              alt="Spaceroid Logo"
            />
          </li>
        </Link>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/images/" element={<Photos />} />
        </Routes>
      </ul>
    </nav>
  );
}
