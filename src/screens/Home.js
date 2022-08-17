import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import Slider from "../components/Slider";

const Home = () => {
  const [top10, setTop10] = useState([]);
  const [top1020, setTop1020] = useState([]);
  const [top2040, setTop2040] = useState([]);
  const [top40, setTop40] = useState([]);

  useEffect(() => {
    const callingAPI = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`
        )
        .then((response) => response.data)
        .then((data) => {
          setTop10(data.results.slice(0, 10));
          setTop1020(data.results.slice(10, 19));
        });
    };

    callingAPI();
  }, []);

  useEffect(() => {
    const callingAPI2 = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=2`
        )
        .then((response) => response.data)
        .then((data) => {
          setTop2040(top1020.concat(data.results));
        });
    };

    callingAPI2();
  }, [top10]);

  useEffect(() => {
    const callingAPI3 = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=3`
        )
        .then((response) => response.data)
        .then((data) => {
          setTop40(top2040.concat(data.results.slice(0, 1)));
        });
    };

    callingAPI3();
  }, [top2040]);

  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const searchingGenre = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
        )
        .then((response) => response.data)
        .then((data) => {
          setGenre(data.genres);
        });
    };

    searchingGenre();
    console.log("Affiche les genres", genre);
  }, []);

  return (
    <div className="home">
      <Navbar top10={top10} top40={top40} />

      <div className="container">
        <h2 className="uppercase marginTopBottom10 txtRight top10Title">
          TOP 10
          <br />
          FILMS POPULAIRES
        </h2>
        <Slider top10={top10} />
      </div>

      <div>
        <h2 className="uppercase marginTopBottom10 txtRight top10Title top1140Title">
          SUITE DU CLASSEMENT <br /> 11 -> 40
        </h2>
        <div className="bgCards">
          {top40.map((next30, index, id, genre) => (
            <MovieList
              index={index + 11}
              movie={next30}
              id={id}
              genre={genre}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
