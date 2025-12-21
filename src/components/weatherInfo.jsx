import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

function WeatherInfo({ weatherData, favourite, setFavourite }) {
  const cityName = weatherData.location.name;

  const addToFavourites = () => {
    if (!favourite.includes(cityName)) {
      setFavourite([...favourite, cityName]);
    }
  };

  return (
    // <div>
    //   <h2>Weather in {cityName}</h2>
    //   <p>Temperature: {weatherData.current.temperature}°C</p>
    //   <p>Humidity: {weatherData.current.humidity}%</p>
    //   <p>Feels Like: {weatherData.current.feelslike}°C</p>
    //   <p>
    //     Weather Descriptions:{" "}
    //     {weatherData.current.weather_descriptions.join(", ")}
    //   </p>
    //   <button onClick={addToFavourites}>Add to Favourites</button>
    // </div>

    <Card sx={{ minWidth: 275, marginTop: 2, padding: 2, textAlign: 'center' }}>
      <CardContent>
        <h2>Weather in {cityName}</h2>
        <p>Temperature: {weatherData.current.temperature}°C</p>
        <p>Humidity: {weatherData.current.humidity}%</p>
        <p>Feels Like: {weatherData.current.feelslike}°C</p>
        <p>
            Weather Descriptions:{" "}
            {weatherData.current.weather_descriptions.join(", ")}
        </p>
        <Button variant="contained" color="primary" onClick={addToFavourites} size="small">
          Add to Favourites
      </Button>
      </CardContent>
    </Card>
  );
}

export default WeatherInfo;