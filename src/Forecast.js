import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {}

  let apiKey = "6f752bf0088ea0318d7dd51abb032503";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleresponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temp">
            <span className="forecast-max">19º/</span>
            <span className="forecast-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
