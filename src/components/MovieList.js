import React, { useEffect, useState } from "react";
import "./MovieList.css";
// import axios from "axios";

const MovieList = ({ movie, index, id, top10, genre }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  // console.log("Affiche les genres2", genre);

  // const [genre, setGenre] = useState([]);
  // useEffect(() => {
  //   const searchingGenre = async () => {
  //     await axios
  //       .get(
  //         `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
  //       )
  //       .then((response) => response.data)
  //       .then((data) => {
  //         setGenre(data.genres);
  //       });
  //   };
  //   searchingGenre();
  // }, []);
  // console.log("Affiche les genres", genre);

  //  UTILISER UN SWITCH

  return (
    <div className="card">
      <h5 className="posterMovieTitle uppercase">{movie.title}</h5>
      <img
        src={`${baseImgUrl}/${size}${movie.poster_path}`}
        alt="poster"
        className="posterMovie"
      />

      <h4 className="ranking uppercase">Classement : {index}/40</h4>
    </div>
  );
};

export default MovieList;
