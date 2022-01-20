import React from "react";
import { Link } from "react-router-dom";
import Astronaut from "../images/astronaut.svg";
import Logo from "../images/logo.svg";

export default function Hero() {
  return (
    <main className="flex flex-col justify-center text-center z-background">
      <img
        id="hero"
        src={Astronaut}
        className="h-[calc(100vh-30px)] rotate-180"
        alt="An astronaut standing on a reddish purple planet that is upside-down in space."
      />
      <div className="tagline w-full fixed flex flex-col z-10">
        <img src={Logo} className="h-logoHeroHeight" alt="Spaceroid Logo" />
        <h1 className="m-3">
          The finest collection of space-related images on the internet.
        </h1>
        <Link to="/main">
          <button
            key="images"
            type="button"
            className="button inline p-3 px-5 bg-shootingStar rounded-lg"
          >
            Start Browsing
          </button>
        </Link>
      </div>
    </main>
  );
}
