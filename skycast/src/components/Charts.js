// Charts.js
import React, { useState, useEffect } from 'react';
import { fetchChartData } from '../api/weatherAPI';

const Charts = ({ city }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const data = await fetchChartData(city);
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChart();
  }, [city]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  if (!chartData.list) {
    return <div>No chart data available</div>;
  }

  return (
    <div>
      <h2>Charts for {city}</h2>
      {chartData.list.map((chart, index) => (
        <div key={index}>
          <p>Date: {chart.dt_txt}</p>
          <p>Temperature: {chart.main.temp}°C</p>
          <p>Humidity: {chart.main.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default Charts;
