// src/components/Search.js
import React, { useState } from 'react';

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
         
