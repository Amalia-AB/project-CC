import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Introduce a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default WeatherForm;
