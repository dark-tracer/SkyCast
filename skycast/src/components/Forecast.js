// src/components/Forecast.js
import React, { useState, useEffect } from 'react';
import fetchWeatherData from '../api/weatherAPI';

const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('London'); // default city

  useEffect(() => {
    const fetchForecast = async () => {
      const data = await fetchWeatherData(city, 'forecast');
      setForecastData(data);
    };
    fetchForecast();
  }, [city]);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>7-Day Forecast for {city}</h2>
      {forecastData.list.map((day, index) => (
        <div key={index}>
          <p>Day {index + 1}: {day.weather[0].description}</p>
          <p>High: {day.main.temp_max}°F</p>
          <p>Low: {day.main.temp_min}°F</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
