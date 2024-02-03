import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState("");
  let [weatherDetails, setWeatherDetails] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setWeatherDetails({
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
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
    <div>
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={updateCity}
          />
          <input type="submit" value="Submit" />
        </form>
        {weatherDetails && (
          <ul>
            <li> City: {city} </li>
            <li>Temperature: {temperature}°C</li>
            <li>Feels like: {weatherDetails.feelsLike}°C</li>
            <li>Humidity: {weatherDetails.humidity}%</li>
          </ul>
        )}
      </div>
    </div>
  );
}
