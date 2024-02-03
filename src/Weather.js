import React from "react";
import axios from "axios";

export default function Weather() {
  function handleSubmit(response) {
    alert(`The weather in Tehran is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=0efb4fc16a9ed98dc0b3aafd8491d6ad&units=metric`;
  axios.get(url).then(handleSubmit);
  return <h1> hello from js</h1>;
}
