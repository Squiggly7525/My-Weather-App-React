import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  console.log(props.date);
  //let date = new days(props.date.getDate());
  let date = days[new Date().getDay()];
  //let date = new Date().getDate();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let sec = new Date().getSeconds();
  return `${date} ${hours}:${minutes}`;
}
