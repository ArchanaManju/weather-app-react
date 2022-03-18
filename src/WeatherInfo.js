import React from "react";
import Formatdate from "./Formatdate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt="sunny" />
          {props.data.temp}°c{" "}
          <ul>
            <li>Precipitation: 1%</li>
            <li> Humidity: {props.data.humidity} </li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h3>{props.data.city}</h3>
          <ul>
            <li>{<Formatdate date={props.data.date} />}</li>
            <li className="text-capitalize"> {props.data.description} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
