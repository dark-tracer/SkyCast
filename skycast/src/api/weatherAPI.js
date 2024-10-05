// src/api/weatherAPI.js
const API_KEY = 'f127820bb63c40d08179cdd4c64daa9b';
const API_URL = 'https://api.openweathermap.org/data/2.5';

const fetchWeatherData = async (city) => {
  const response = await fetch(`${API_URL}/weather?q=${city}&units=imperial&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

export default fetchWeatherData;
