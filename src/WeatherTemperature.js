import React, { useState } from "react";

export default function WeatherTemperature(props) {
  // Use array destructuring to access unit and setUnit
  const [unit, setUnit] = useState("celsius");

  function converToFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit"); // Corrected spelling of Fahrenheit
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
