import React, { useState, useEffect} from 'react';
import './App.css';

let locationList = [];

function App() {

  const [inputCity, setInputCity] = useState("");
  const [click, setClick] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [favourite, setfavourite] = useState([]);

  useEffect(() => {
    if (inputCity && click) {
      const fetchWeather = async () => {
        const apiKey = "8a6a4253f068985717ae80561666447c";
        const response = await fetch(
          `http://api.weatherstack.com/current?access_key=${apiKey}&query=${inputCity}`
        );
        const data = await response.json();
        console.log(data);
        locationList.push(data.location.name);
        setClick(false);
        setWeatherData(data);
      };
      fetchWeather();
    }
  }, [inputCity, click]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button onClick={() => setClick(true)}>Get Weather</button>
      {weatherData && weatherData.current ? (
        <div>
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temperature}°C</p>
          <p>Weather Descriptions: {weatherData.current.weather_descriptions.join(", ")}</p>
          <button
            onClick={() => {
              if (!favourite.includes(weatherData.location.name))
                setfavourite([...favourite, weatherData.location.name]);
            }}
          >
            Add to Favourites
          </button>
        </div>
      ) : click ? (
        <p>Loading...</p>
      ) : null}
      <div>
        <h2>Favourite Locations</h2>
        <ul>
          {favourite.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
