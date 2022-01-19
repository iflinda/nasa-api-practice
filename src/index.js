/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation";
import "./styles/global.css";

ReactDOM.render(
  <div>
    <Router>
      <Navigation />
    </Router>
  </div>,
  document.getElementById("root")
);
