// src/components/CurrentWeather.js
import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/weatherAPI';

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London'); // default city

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    };
    fetchCurrentWeather();
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Current Weather in {city}</h2>
      <p>Temperature: {weatherData.main.temp}°F</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} mph</p>
      <p>Weather Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
