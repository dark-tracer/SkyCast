// weatherAPI.js
import { API_KEY } from './apiKeys';

const fetchWeatherData = async (city) => {
  const response = await fetch(`${API_URL}/weather?q=${city}&units=imperial&appid=${API_KEY}`);
  // ...
};
