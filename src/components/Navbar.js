import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import tv from "../assets/tvland.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Navbar.css";

const baseImgUrl = "https://image.tmdb.org/t/p";
const size = "w500";

const Navbar = ({ top40 }) => {
  return (
    <div className="navbar wallpaper">
      <div className="blurMask">
        <img src={tv} alt="tv" className="tv" />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper2 mySwiperOff"
      >
        {top40.map((next30, index) => (
          <SwiperSlide className="topSlider">
            <img
              src={`${baseImgUrl}/${size}${next30.backdrop_path}`}
              alt="poster"
              className="topSliderPoster"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Navbar;
