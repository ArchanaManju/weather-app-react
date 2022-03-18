import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "2b354ee10180a8ec5f31e475798a3953";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city... "
            className="'form-control"
            onChange={handleCityChange}
          />

          <input type="submit" value="search" className="btn-primary" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
