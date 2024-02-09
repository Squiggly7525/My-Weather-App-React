import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState("");
  let [weatherDetails, setWeatherDetails] = useState("");

  function showTemperature(response) {
    const temperature = Math.round(response.data.main.temp);

    setWeatherDetails({
      temperature: temperature,
      coordinates: response.data.coord,
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
      let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
      <div className="title">Weather app🌎</div>
      <div className="search-bar">
        <form id="Search-engine" onSubmit={handleSubmit}>
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
        <div>
          <WeatherInfo city={city} weatherDetails={weatherDetails} />
          <WeatherForecast coordinates={weatherDetails.coordinates} />
        </div>
      )}{" "}
    </div>
  );
}
