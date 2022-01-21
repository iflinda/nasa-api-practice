import React from "react";
import { Link } from "react-router-dom";
import Astronaut from "../images/astronaut.svg";
import Logo from "../images/logo.svg";

export default function landingPage() {
    return (
        <main className="flex flex-col justify-center text-center">
            <img
                id="hero"
                src={Astronaut}
                className="absolute h-screen m-auto top-0 left-0 right-0 text-align-center z-background"
                alt="An astronaut standing on a reddish purple planet that is upside-down in space."
            />
            <img
                src={Logo}
                className="mobile:mt-logoTopMobile sm:mt-logoTop h-logoHeroHeight"
                alt="Spaceroid Logo"
            />
            <div className="z-10">
                <h1 className="mobile:text-xl md:text-2xl lg:text-3xl m-3">
                    The finest collection of space-related images on the
                    internet.
                </h1>
                <Link id="browse" to="/images">
                    <button
                        className="button inline p-3 px-5 bg-shootingStar rounded-lg"
                        type="button"
                    >
                        Start Browsing
                    </button>
                </Link>
            </div>
        </main>
    );
}
