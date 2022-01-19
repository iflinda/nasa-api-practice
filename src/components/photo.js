/* eslint-disable consistent-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import axios from "axios";
import "../styles/global.css";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

export default class photo extends Component {
  constructor() {
    super();
    this.state = {
      photos: null,
      isLoaded: false,
    };
  }

  async componentDidMount() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`)
      .then((res) => {
        this.setState({ photos: res.data });
        this.setState({ isLoaded: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadPage() {
    if (!this.state.isLoaded) {
      return (
        <div>
          <div className="w-spinnerWidth h-spinnerHeight border-8 border-shootingStar border-dashed rounded-full animate-spin" />
        </div>
      );
    }
    return this.state.photos.map((results) => {
      return <h1 key={results.title}>{results.title}</h1>;
    });
  }

  render() {
    return <div>{this.loadPage()}</div>;
  }
}
