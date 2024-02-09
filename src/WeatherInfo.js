import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo({ city, weatherDetails }) {
  return (
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
  );
}
