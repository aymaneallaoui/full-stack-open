/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import Weather from "./Weather";
import axios from "axios";

const OneCountry = ({ result }) => {
  const keys = Object.keys(result.languages);
  const [allWeather, setAllWeather] = useState([]);

  useEffect(() => {
    const api_key = import.meta.env.VITE_WEATHER_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${result.capital[0]}&appid=${api_key}`
      )
      .then((response) => {
        console.log(response.data);
        setAllWeather(response.data);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>{result.name.common}</h1>
        <p>{result.capital[0]}</p>
        <p>{result.area}</p>
        <h3>languages:</h3>
        <ul>
          {keys.map((keys, index) => (
            <li key={index}>{result.languages[keys]}</li>
          ))}
        </ul>
        <img src={result.flags.png} alt="flag" height="200" width="250" />
      </div>
      <Weather result={result} />
    </div>
  );
};

export default OneCountry;
