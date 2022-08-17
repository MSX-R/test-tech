import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const baseImgUrl = "https://image.tmdb.org/t/p";
const size = "w500";

const Slider = ({ top10 }) => {
  const [isVisible, setIsVisible] = useState(false);

  function showOverview(e) {
    e.preventDefault();
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {top10.map((movie, index, id, top10, genre) => (
          <SwiperSlide className="sliderCard">
            <div>
              <h4 className="sliderPosterMovieTitle uppercase">
                {movie.title}
              </h4>
              <div className="genreMovie"> Action, Aventure, Thriller</div>

              <img
                src={`${baseImgUrl}/${size}${movie.poster_path}`}
                alt="poster"
                className="sliderPosterMovie"
              />

              <h4 className="ranking uppercase">Classement : {index + 1}</h4>
              <button className="buttonOverview bold" onClick={showOverview}>
                {" "}
                | Accéder à la Description du film |
              </button>
            </div>

            <div
              className={
                isVisible ? "sliderDescription" : "sliderDescription hidden"
              }
            >
              <p className="description">
                {movie.overview.length <= 120
                  ? movie.overview
                  : movie.overview.substring(0, 120) + "..."}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
