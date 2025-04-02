import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(`https://wttr.in/${city}?format=%C+%t+%h`);
      const data = response.data.split(" "); // Splitting response into parts
      
      setWeather({
        condition: data[0], // Weather condition
        temperature: data[1], // Temperature
        humidity: data[2], // Humidity
      });

      setError(""); // Clear any previous errors
    } catch (err) {
      setError("City not found! Try again.");
      setWeather(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-5">
      <h1 className="text-3xl font-bold mb-5">Weather Finder App 🌤️</h1>
      <div className="flex gap-2">
        <input
          type="text"
          className="p-2 rounded-md border border-gray-400"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={fetchWeather}
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {weather && (
        <div className="mt-5 bg-white p-5 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">{city.toUpperCase()}</h2>
          <p>☁️ {weather.condition}</p>
          <p>🌡️ {weather.temperature}</p>
          <p>💧 Humidity: {weather.humidity}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
