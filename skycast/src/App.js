// src/App.js
import React from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Charts from './components/Charts';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Weather Dashboard</h1>
      </header>
      <main>
        <Search />
        <CurrentWeather />
        <Forecast />
        <Charts />
      </main>
    </div>
  );
};

export default App;
