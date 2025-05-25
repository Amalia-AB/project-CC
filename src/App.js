import React, { useState } from 'react';
import axios from 'axios';
import { getWeather } from './api';
import WeatherForm from './WeatherForm';
import WeatherResult from './WeatherResult';
import './App.css';

const UNSPLASH_KEY = 'ryqIDuAeM3m8lIFUNBkfgZ-tErbpv_NWz6WkV0oT-dM'; 

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const cleanCity = city.trim();
      const data = await getWeather(cleanCity);
      setWeatherData(data);

      // Cerere către Unsplash
      const unsplashResponse = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: `${data.city} weather`,
            orientation: 'landscape',
            per_page: 1,
          },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`,
          },
        }
      );

      const imageUrl = unsplashResponse.data.results[0]?.urls?.regular;
      document.body.style.backgroundImage = imageUrl
        ? `url(${imageUrl})`
        : 'linear-gradient(to right, #b993d6, #8ca6db)';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    } catch (error) {
      alert('Orașul nu a fost găsit sau imaginea nu a putut fi încărcată.');
      setWeatherData(null);
    }
  };

  return (
    <div className="app-container">
      <WeatherForm onSearch={handleSearch} />
      <WeatherResult data={weatherData} />
    </div>
  );
}

export default App;
