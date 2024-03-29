import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo({ city, weatherDetails }) {
  return (
    <div className="weather-details-container">
      <div className="main-humidity-wind">
        <div className="main-data">
          <h1>{city.toUpperCase()} </h1>{" "}
          <FormattedDate date={weatherDetails.date} />
          {", "}
          <span className="description"> {weatherDetails.description}</span>
        </div>{" "}
        <div className="humidity-wind">
          <span>Humidity: {weatherDetails.humidity}%</span>
          {", "}
          <span>Wind: {weatherDetails.wind} km/h</span>
        </div>
      </div>
      <div className="icon-temperature-realfeel">
        <div className="icon-and-temperature">
          {" "}
          <span className="icon">
            <WeatherIcon code={weatherDetails.icon} size={52} />
            <img src={weatherDetails.iconUrl} />
          </span>
          <div className="temp">
            <WeatherTemperature celsius={weatherDetails.temperature} />
          </div>
        </div>
        <span className="real-feel">
          Feels like: {weatherDetails.feelsLike}°C
        </span>
      </div>
    </div>
  );
}
