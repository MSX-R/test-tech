import React, { useEffect, useState } from "react";
import "./SliderTop40.css";
import axios from "axios";

const SliderTop40 = ({ movie, index, listGenre }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (listGenre.length) {
      const movieGenre = movie.genre_ids;
      const cat = [];
      for (const genreFilm of movieGenre) {
        const findResult = listGenre.find((el) => el.id == genreFilm);
        cat.push(findResult.name);
        setCategory(cat);
      }
    }
  }, [listGenre]);

  return (
    <div className="card">
      <h5 className="posterMovieTitle uppercase">{movie.title}</h5>
      <img
        src={`${baseImgUrl}/${size}${movie.poster_path}`}
        alt="poster"
        className="posterMovie"
      />
      <p className="categoryMovie">{category.join(", ")} </p>
      <h4 className="ranking uppercase">Classement : {index}/40</h4>
    </div>
  );
};

export default SliderTop40;
