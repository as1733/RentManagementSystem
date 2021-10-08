import React, { Component } from "react";
import "../styles/carousel.css";
import img1 from "../shared/sample1.svg";
import img2 from "../shared/sample2.svg";
import img3 from "../shared/sample3.svg";

class Carosul extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ backgroundColor: "#282c34" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} alt="Image 1" class="c-img" />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>

          <div class="carousel-item">
            <img src={img2} alt="Image 2" class="c-img" />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>

          <div class="carousel-item">
            <img src={img3} alt="Image 3" class="c-img" />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carosul;
