import Button from '@mui/material/Button';
import Div from '@mui/material/Box';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function SearchBar({ inputCity, setInputCity, onSearch }) {
  return (
    <Div sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={onSearch} size="small">
        Get Weather
      </Button>
    </Div>
  );
}

export default SearchBar;
