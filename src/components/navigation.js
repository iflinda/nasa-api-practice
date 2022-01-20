import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import "../styles/global.css";

export default function Navigation() {
    return (
        <header>
            <nav className="h-logoNavHeight z-10">
                <ul className="flex justify-center w-screen">
                    <li key="header">
                        <Link to="/" as="li">
                            <img
                                src={Logo}
                                className="w-logoNavWidth h-logoNavHeight"
                                alt="Spaceroid Logo"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
