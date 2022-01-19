import React from "react";
import astronaut from "../images/astronaut.svg";

export default function Hero() {
  return (
    <main className="flex flex-col">
      <img src={astronaut} className="h-screen" alt="" />
    </main>
  );
}
