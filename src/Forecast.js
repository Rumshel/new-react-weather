import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
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
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temp">
            <span className="forecast-max">19º/</span>
            <span className="forecast-min">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temp">
            <span className="forecast-max">19º/</span>
            <span className="forecast-min">10º</span>
          </div>
        </div>
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temp">
            <span className="forecast-max">19º/</span>
            <span className="forecast-min">10º</span>
          </div>
        </div>
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
