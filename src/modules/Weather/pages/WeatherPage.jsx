import { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

function WeatherPage() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const apiKey = "4211a5359d1a050aaa714d8019fea665"; // Replace with your OpenWeatherMap API key

  // Fetch Weather Data using city or coordinates
  const fetchWeather = (city = null, lat = null, lon = null) => {
    setLoading(true);
    let url = "";

    if (city) {
      // Fetch by city name
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    } else if (lat && lon) {
      // Fetch by coordinates
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    }

    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        setLoading(false);
      });
  };

  // Get user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          fetchWeather("New York"); // Default to New York if location fetching fails
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      fetchWeather("New York"); // Default to New York if geolocation is not available
    }
  };

  // Fetch weather data when location or city changes
  useEffect(() => {
    if (latitude && longitude) {
      fetchWeather(null, latitude, longitude); // Fetch weather using coordinates
    } else {
      getCurrentLocation(); // Fetch current location on first render
    }
  }, [latitude, longitude]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    fetchWeather(e.target.value);
  };

  return (
    <div className="weather-card">
      <h2>Live Weather</h2>
      <div className="city-selector">
        <label htmlFor="city">Select City: </label>
        <select id="city" value={city} onChange={handleCityChange}>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Paris">Paris</option>
          <option value="Mumbai">Mumbai</option>
        </select>
      </div>

      {loading ? (
        <p>Loading weather...</p>
      ) : weather ? (
        <div className="weather-info">
          <div className="weather-animation">
            {weather.weather[0].main === "Clear" && (
              <div className="sun"></div>
            )}
            {weather.weather[0].main === "Rain" && (
              <div className="rain">
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
              </div>
            )}
            {weather.weather[0].main === "Clouds" && (
              <div className="clouds">
                <div className="cloud"></div>
                <div className="cloud"></div>
              </div>
            )}
          </div>
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p>Error fetching weather data</p>
      )}
    </div>
  );
}

export default WeatherPage;
