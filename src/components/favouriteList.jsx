import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

function FavouriteList({ favourite }) {
  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>Favourite Locations</Typography>
      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
        {favourite.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteList;
