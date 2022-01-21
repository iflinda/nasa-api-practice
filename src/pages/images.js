import React from "react";
import Photos from "../components/photos";
import "../styles/global.css";

export default function Images() {
    return (
        <main>
            <section>
                <h1 className="text-center m-6">
                    Astronomy Pictures of the Day
                </h1>
                <Photos />
            </section>
        </main>
    );
}
