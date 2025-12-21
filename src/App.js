import React, { useState, useEffect } from "react";
import "./App.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SearchBar from "./components/searchbar";
import WeatherInfo from "./components/weatherInfo";
import FavouriteList from "./components/favouriteList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [click, setClick] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    if (inputCity && click) {
      const fetchWeather = async () => {
        const apiKey = "8a6a4253f068985717ae80561666447c";
        const response = await fetch(
          `http://api.weatherstack.com/current?access_key=${apiKey}&query=${inputCity}`
        );
        const data = await response.json();
        setWeatherData(data);
        setClick(false);
      };
      fetchWeather();
    }
  }, [inputCity, click]);

  return (
    <div className="App">
      {/* <h1>Weather App</h1> */}

      <Typography variant="h1" sx={{ textAlign: "center", marginTop: 2 }}>
        Weather App
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <SearchBar
        inputCity={inputCity}
        setInputCity={setInputCity}
        onSearch={() => setClick(true)}
      />

      {click && !weatherData && <p>Loading...</p>}

      {weatherData && weatherData.current && (
        <WeatherInfo
          weatherData={weatherData}
          favourite={favourite}
          setFavourite={setFavourite}
        />
      )}

      <FavouriteList favourite={favourite} />
    </div>
  );
}

export default App;