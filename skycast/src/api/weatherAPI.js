// src/api/weatherAPI.js
import { API_KEY, API_URL } from './apiKeys';

const fetchWeatherData = async (city) => {
  const response = await fetch(`${API_URL}/weather?q=${city}&units=imperial&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchForecastData = async (city) => {
  const response = await fetch(`${API_URL}/forecast?q=${city}&units=imperial&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchUVIndexData = async (lat, lon) => {
  const response = await fetch(`${API_URL}/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchChartData = async (city) => {
  const response = await fetch(`${API_URL}/forecast?q=${city}&units=imperial&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

export { fetchWeatherData, fetchForecastData, fetchUVIndexData, fetchChartData };
