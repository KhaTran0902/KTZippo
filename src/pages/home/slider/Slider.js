import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div /*data-aos="zoom-in-up"*/ className="slider">
        <div className="slider__content">
          <b></b>
          <h2>Comming Soon</h2>
          <b></b>
        </div>
        <Slider {...settings}>
          <div>
            <img src="https://i.pinimg.com/564x/d0/a0/01/d0a001416a498c9449839e06462e6b77.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/564x/95/43/76/954376359f8a7f280ab91273c3fac0d1.jpg" />
          </div>
          <div>
            <img src="https://i.pinimg.com/564x/26/08/d1/2608d123747608f01283bbfa5522386e.jpg" />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/a8/f2/b2/a8f2b2ef3abfd6925c51f8c9923d3e0d.jpg"
              alt=""
            />
          </div>
          <div>
            <img src="https://zippoxin.com/wp-content/uploads/2019/10/zippo-dep92.jpg" />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/f6/0c/a9/f60ca9a9c0f3df83e7c135b2cfc02f36.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
