import React from "react";
import Formatdate from "./Formatdate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={56} />
              <WeatherTemperature celsius={props.data.temp} />
            </div>
          </div>
          <ul>
            <li>Precipitation: 1%</li>
            <li> Humidity: {props.data.humidity} </li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h3 className="city">{props.data.city}</h3>
          <ul>
            <li>{<Formatdate date={props.data.date} />}</li>
            <li className="text-capitalize"> {props.data.description} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
