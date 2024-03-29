import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  //useEffect(()=> {
  //setLoaded(false);
  //}, {props.coordinates})

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(props);
  function handleError(error) {
    console.error("Error fetching weather data:", error);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6 && index > 0) {
              return (
                <div className="col" key={index}>
                  {" "}
                  <WeatherForecastDay data={dailyForecast} />{" "}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    // let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let apiKey = "a867e25f2d83db579421a57fd8e937ec";

    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
    return <p>null</p>;
  }
}
