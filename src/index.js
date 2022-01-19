/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import Navigation from "./components/navigation";

ReactDOM.render(
  <Router>
    <Navigation />
  </Router>,
  document.getElementById("root")
);
