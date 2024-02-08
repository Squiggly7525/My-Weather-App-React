import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState("");
  let [weatherDetails, setWeatherDetails] = useState(null);
  function showTemperature(response) {
    const temperature = Math.round(response.data.main.temp);

    setWeatherDetails({
      temperature: temperature,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
    setMessage(
      `City: ${city} Temperature: ${temperature} 
`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0efb4fc16a9ed98dc0b3aafd8491d6ad&units=metric`;
      axios.get(url).then(showTemperature);
    }
  }

  function updateCity(event) {
    let newCity = event.target.value;
    setCity(newCity);
    setMessage("");
    if (newCity === "") {
      setTemperature("");
      setWeatherDetails(null);
    }
  }

  return (
    <div className="Weather">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Type a city"
            onChange={updateCity}
            autoFocus="on"
          />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>

      {weatherDetails && (
        <div className="weatherInfo">
          <ul>
            <li>
              {" "}
              <h1>{city.toUpperCase()} </h1>{" "}
            </li>{" "}
            <li>
              <FormattedDate date={weatherDetails.date} />
            </li>{" "}
            <li className="description"> {weatherDetails.description}</li>
            <div>
              {" "}
              <WeatherIcon code={weatherDetails.icon} />
              <img src={weatherDetails.iconUrl} />
              <WeatherTemperature celsius={weatherDetails.temperature} />
            </div>{" "}
            <li>Feels like: {weatherDetails.feelsLike}°C</li>
            <li>Humidity: {weatherDetails.humidity}%</li>
            <li>Wind: {weatherDetails.wind} km/h</li>
          </ul>
        </div>
      )}
    </div>
  );
}
