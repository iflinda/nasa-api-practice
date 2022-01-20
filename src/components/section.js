/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import "../styles/global.css";
import errorImage from "../images/404.png";

const apiKey = "b2X98yZg15VWw21GShXy4i0AeXvomYcHyusJhsub"; // Originally hid API key in the .env file.

function Loading() {
  return (
    <div className="w-screen border-8 border-shootingStar border-dashed rounded-full animate-slow" />
  );
}

function changeButton(id) {
  const el = document.getElementById(id);
  if (el.value === "Like") {
    el.value = "Unlike";
    el.style.backgroundColor = "#7A7381";
    el.innerHTML = "Unlike";
  } else if (el.value === "Unlike") {
    el.value = "Like";
    el.innerHTML = "Like";
    el.style.backgroundColor = "#9E1A21";
  }
}

export default class Section extends Component {
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
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=100`)
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
        <div className="w-screen border-8 border-shootingStar border-dashed rounded-full animate-slow" />
      );
    }
    return (
      <div className="flex flex-row flex-wrap justify-center">
        {this.state.photos.map((results) => {
          return (
            <div key={results.url}>
              <LazyLoad placeholder={<Loading />}>
                <article className="w-fit bg-white p-6 m-6 rounded-lg">
                  <h2 className="my-3">{results.title}</h2>
                  <div>
                    <img
                      src={results.url}
                      className="mobile:w-imageWidthMobile mobile:h-imageHeightMobile sm:w-imageWidth sm:h-imageHeight object-cover rounded-lg"
                      onError={(event) => {
                        event.target.src = `${errorImage}`;
                      }}
                      alt={results.title}
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div>{results.date}</div>
                    <button
                      id={results.index}
                      className="likeButton bg-fallingStar px-5 rounded-lg w-buttonWidth min-w-[86.08px]"
                      type="submit"
                      value="Like"
                      onClick={() => {
                        this.likePhoto(results.index);
                        changeButton(results.index);
                      }}
                    >
                      Like
                    </button>
                  </div>
                </article>
              </LazyLoad>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    if (this.state.hasError) {
      <h1>Oh no! Something has went wrong. 😢</h1>;
    }
    return (
      <section>
        <h1 className="text-center m-6">Astronomy Pictures of the Day</h1>
        {this.loadPage()}
      </section>
    );
  }
}
