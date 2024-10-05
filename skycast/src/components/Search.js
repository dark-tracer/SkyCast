// src/components/Search.js
import React, { useState } from 'react';
import { fetchWeatherData } from '../api/weatherAPI';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Charts from './Charts';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const city = searchTerm.trim();
      if (city) {
        const data = await fetchWeatherData(city);
        setSearchResults(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
      {searchResults && (
        <div>
          <h2>Search Results for {searchTerm}</h2>
          <CurrentWeather city={searchTerm} />
          <Forecast city={searchTerm} />
          <Charts city={searchTerm} />
        </div>
      )}
    </div>
  );
};

export default Search;
