import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather App</h1> <br /> <Weather />
    </div>
    <footer>
      Coded by Hasyi Salehi published on{" "}
      <a href="https://github.com/Squiggly7525/Weather-app-react">Github</a>{" "}
      deployed on{" "}
      <a href="https://weather-app-react-kappa-six.vercel.app/"> Vercel</a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
