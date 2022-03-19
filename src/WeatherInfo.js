import React from "react";
import Formatdate from "./Formatdate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log("date", props.data.date);
  return (
    <div className="weatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
              <span className="temperature">{Math.round(props.data.temp)}</span>
              <span className="unit">°c </span>
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
