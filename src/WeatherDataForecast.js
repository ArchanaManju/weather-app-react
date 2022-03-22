import React, { useState, useEffect } from "react";

import "./weatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherDataForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setforecast] = useState(null);

  useEffect(() => {
    setloaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setforecast(response.data.daily);
    setloaded(true);
  }
  function load() {
    const apiKey = "2b354ee10180a8ec5f31e475798a3953";
    const long = props.coordinates.lon;
    const lat = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
