import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherDataForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  const apiKey = "2b354ee10180a8ec5f31e475798a3953";
  const long = props.coordinates.lat;
  const lat = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div className="" row>
        <div className="col">
          <div className="weatherforecast-day">Thu</div>{" "}
          <WeatherIcon code="01d" size={36} />
          <div className="weatherForecast-temp">
            <span className="weatherForecast-temp-max">19</span>
            <span className="weatherForecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
