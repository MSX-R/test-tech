import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import SliderTop40 from "../components/SliderTop40";
import DisplayTop10 from "../components/DisplayTop10";

const Home = () => {
  const [top10, setTop10] = useState([]);
  const [top1020, setTop1020] = useState([]);
  const [top2040, setTop2040] = useState([]);
  const [top40, setTop40] = useState([]);

  const apiKEY = "23bf19828d3b1371041e35c30a6e9db1";

  useEffect(() => {
    const callingAPI = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=fr-FR&page=1`
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
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=fr-FR&page=2`
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
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=fr-FR&page=3`
        )
        .then((response) => response.data)
        .then((data) => {
          setTop40(top2040.concat(data.results.slice(0, 1)));
        });
    };

    callingAPI3();
  }, [top2040]);

  const [listGenre, setListGenre] = useState([]);
  useEffect(() => {
    const searchingGenre = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKEY}&language=fr-FR`
        )
        .then((response) => response.data)
        .then((data) => {
          setListGenre(data.genres);
        });
    };
    searchingGenre();
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
        <DisplayTop10 top10={top10} listGenre={listGenre} />
      </div>

      <div>
        <h2 className="uppercase marginTopBottom10 txtRight top10Title top1140Title">
          SUITE DU CLASSEMENT <br /> 11 - 40
        </h2>
        <div className="bgCards">
          {top40.map((next30, index, key) => (
            <SliderTop40 index={index + 11} movie={next30} key={index} listGenre={listGenre} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
