import React from 'react';

const WeatherResult = ({ data }) => {
  if (!data) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@4x.png`;

  return (
    <div className="weather-card">
      <div className="weather-search">
        <img src={iconUrl} alt="Weather Icon" />
        <h1>{data.temp}°C</h1>
        <h2>{data.city}</h2>
        <p>{data.description}</p>
      </div>
      <div className="weather-details">
        <p>💧 Umiditate: {data.humidity}%</p>
        <p>💨 Vânt: {data.windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherResult;
