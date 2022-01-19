import React from "react";
import Photo from "../components/photo";
import "../styles/global.css";

export default function Photos() {
  return (
    <section className="absolute flex flex-col justify-center mt-imagesTop">
      <Photo />
    </section>
  );
}
