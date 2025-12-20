import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function FavouriteList({ favourite }) {
  return (
    <div>
      <h2>Favourite Locations</h2>
      <ul>
        {favourite.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteList;
