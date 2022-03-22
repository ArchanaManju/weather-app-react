import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="weatherforecast-day">{day()}</div>{" "}
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="weatherForecast-temp">
        <span className="weatherForecast-temp-max">{maxTemp()}</span>
        <span className="weatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
