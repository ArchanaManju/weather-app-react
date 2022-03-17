import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Formatdate from "./Formatdate";

export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherdata({
      temp: response.data.main.temp,
      precipitation: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city... "
            className="'form-control"
          />

          <input type="submit" value="search" className="btn-primary" />
        </form>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt="sunny" />
            {weatherData.temp}°c{" "}
            <ul>
              <li>Precipitation: 1%</li>
              <li> Humidity: {weatherData.humidity} </li>
              <li>Wind: {weatherData.wind} mph</li>
            </ul>
          </div>
          <div className="col-6">
            <h3>{props.deafultCity}</h3>
            <ul>
              <li>{<Formatdate date={weatherData.date} />}</li>
              <li className="text-capitalize"> {weatherData.description} </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2b354ee10180a8ec5f31e475798a3953";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.deafultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
