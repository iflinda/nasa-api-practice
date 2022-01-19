/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import axios from "axios";
import "../styles/global.css";
import errorImage from "../images/404.png";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

function changeButton(id) {
  const el = document.getElementById(id);
  if (el.value === "Like") {
    el.value = "Unlike";
    el.style.backgroundColor = "#7A7381";
    el.innerHTML = "Unlike";
  } else if (el.value === "Unlike") {
    el.value = "Like";
    el.innerHTML = "Like";
    el.style.backgroundColor = "#FC636B";
  }
}

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
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`)
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
        <div className="w-spinnerWidth h-spinnerHeight border-8 border-shootingStar border-dashed rounded-full animate-spin" />
      );
    }
    return (
      <div>
        <h1 className="text-center">Astronomy Pictures of the Day</h1>
        {this.state.photos.map((results) => {
          return (
            <article key={results.title}>
              <li className="bg-white p-6 m-6 rounded-lg">
                <h2 className="my-3">{results.title}</h2>
                <img
                  src={results.url}
                  className="mobile:w-imageWidthMobile mobile:h-imageHeightMobile sm:w-imageWidth sm:h-imageHeight object-cover rounded-lg"
                  onError={(event) => {
                    event.target.src = `${errorImage}`;
                  }}
                  alt="Space, and the vastness of the unknown galaxy."
                />
                <div className="flex justify-between mt-4">
                  <p className="my-3">{results.date}</p>
                  <button
                    id={results.index}
                    className="likeButton bg-shootingStar px-5 rounded-lg"
                    type="submit"
                    value="Like"
                    onClick={() => {
                      this.likePhoto(results.index);
                      changeButton(results.index);
                    }}
                  >
                    <p>Like</p>
                  </button>
                </div>
              </li>
            </article>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.state.hasError) {
      <h1>Oh no! Something has went wrong. 😢</h1>;
    }
    return <ul className="">{this.loadPage()}</ul>;
  }
}
