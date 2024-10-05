// Forecast.js
import React, { useState, useEffect } from 'react';
import { fetchForecastData } from '../api/weatherAPI';

const Forecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const data = await fetchForecastData(city);
        setForecastData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForecast();
  }, [city]);

  if (!forecastData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Forecast for {city}</h2>
      {forecastData.list.map((forecast, index) => (
        <div key={index}>
          <p>Date: {forecast.dt_txt}</p>
          <p>Temperature: {forecast.main.temp}°C</p>
          <p>Humidity: {forecast.main.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
