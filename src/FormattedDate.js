import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let date = days[new Date().getDay()];
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  return `${date} ${hours}:${minutes}`;
}
