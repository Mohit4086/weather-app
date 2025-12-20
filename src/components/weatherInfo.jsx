function WeatherInfo({ weatherData, favourite, setFavourite }) {
  const cityName = weatherData.location.name;

  const addToFavourites = () => {
    if (!favourite.includes(cityName)) {
      setFavourite([...favourite, cityName]);
    }
  };

  return (
    <div>
      <h2>Weather in {cityName}</h2>
      <p>Temperature: {weatherData.current.temperature}°C</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
      <p>Feels Like: {weatherData.current.feelslike}°C</p>
      <p>
        Weather Descriptions:{" "}
        {weatherData.current.weather_descriptions.join(", ")}
      </p>
      <button onClick={addToFavourites}>Add to Favourites</button>
    </div>
  );
}

export default WeatherInfo;