import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <br /> <Weather />
    </div>
    <footer>
      Coded by Hasti Salehi. Open-sourced on{" "}
      <a href="https://github.com/Squiggly7525/Weather-app-react">Github</a> &
      deployed on{" "}
      <a href="https://weather-app-react-kappa-six.vercel.app/"> Vercel</a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
