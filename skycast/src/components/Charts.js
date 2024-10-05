// src/components/Charts.js
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import fetchWeatherData from '../api/weatherAPI';

const Charts = () => {
  const [chartData, setChartData] = useState(null);
  const [city, setCity] = useState('London'); // default city

  useEffect(() => {
    const fetchChartData = async () => {
      const data = await fetchWeatherData(city, 'forecast');
      const chartData = data.list.map((day) => ({
        date: day.dt_txt,
        temperature: day.main.temp,
        precipitation: day.pop,
      }));
      setChartData(chartData);
    };
    fetchChartData();
  }, [city]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Temperature and Precipitation Trends for {city}</h2>
      <LineChart width={500} height={300} data={chartData}>
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="precipitation" stroke="#82ca9d" />
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Charts;
