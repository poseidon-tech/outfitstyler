import React from 'react';
import './weather.css'; // Import the CSS file for styling


const WeatherForecastBox = () => {
  // Hardcoded weather forecast with additional fields
  const weatherForecast = {
    temperature: "25°C",
    weather: "Sunny"
  };

  return (
    <div className="weather-forecast-box">
      <h2>Todays' Weather</h2>
      <div className="weather-details">
        <div className="temperature">{weatherForecast.temperature}</div>
        <div className="weather">{weatherForecast.weather}</div>
      </div>
    </div>
  );
};

export default WeatherForecastBox;

