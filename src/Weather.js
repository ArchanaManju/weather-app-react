import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          14°c{" "}
          <ul>
            <li>Precipitation: 1%</li>
            <li> Humidity: 46% </li>
            <li>Wind: 3 mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>New York, NY, USA</h3>
          <ul>
            <li>Wednesday 07:00</li>
            <li> Tuesday 18:00 </li>
            <li> Sunny </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
