import React from "react";
import { Link } from "react-router-dom";
import Astronaut from "../images/astronaut.svg";
import Logo from "../images/logo.svg";

export default function hero() {
  return (
    <main
      id="hero"
      className="fixed h-screen flex flex-col z-background text-center"
    >
      <img
        src={Astronaut}
        className="h-5/6 z-background"
        alt="An astronaut standing on a reddish purple planet that is upside-down in space."
      />
      <img
        src={Logo}
        className="h-logoHeroHeight sm:mt-marginHeroLogo mobile:mt-marginHeroLogoMobile z-1"
        alt="Spaceroid Logo"
      />
      <h1 className="m-3">
        The finest collection of space-related images on the internet.
      </h1>
      <Link to="/images">
        <li
          key="images"
          className="button inline p-1 px-5 bg-shootingStar rounded-lg"
        >
          Start Browsing
        </li>
      </Link>
    </main>
  );
}
