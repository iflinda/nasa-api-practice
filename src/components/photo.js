/* eslint-disable react/no-unused-state */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import axios from "axios";
import "../styles/global.css";
import errorImage from "../images/404.png";
import heart from "../images/heart.svg";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

export default class photo extends Component {
  constructor() {
    super();
    this.state = {
      photos: null,
      isLoaded: false,
      hasError: false,
      errorMessage: "",
    };
  }

  async componentDidMount() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`)
      .then((res) => {
        const { data } = res;
        for (let i = 0; i <= data.length - 1; i += 1) {
          data[i].liked = false;
          data[i].index = i;
          this.setState({ photos: data });
        }
        this.setState({ isLoaded: true });
      })
      .catch((err) => {
        this.setState({ hasError: true });
        this.setState({ errorMessage: err });
      });
  }

  likePhoto(index) {
    const favourites = [...this.state.photos];
    favourites[index].liked = !favourites[index].liked;
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
      return (
        <li key={results.title} className="bg-white p-6 pb-32 m-6 rounded-lg">
          <h2 className="my-3">{results.title}</h2>
          <img
            src={results.url}
            className="mobile:w-imageWidthMobile mobile:h-imageHeightMobile sm:w-imageWidth sm:h-imageHeight object-cover rounded-lg"
            onError={(event) => {
              event.target.src = `${errorImage}`;
            }}
            alt="Space, and the vastness of the unknown galaxy."
          />
          <div className="flex justify-between">
            <p className="my-3">{results.date}</p>
            <button
              className="heart"
              type="submit"
              onClick={() => this.likePhoto(results.index)}
            >
              <img src={heart} className="h-6" alt="A cute tiny heart." />
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    if (this.state.hasError) {
      <h1>Oh no! Something has went wrong. 😢</h1>;
    }
    return <ul className="">{this.loadPage()}</ul>;
  }
}
