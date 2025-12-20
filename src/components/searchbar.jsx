function SearchBar({ inputCity, setInputCity, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button onClick={onSearch}>Get Weather</button>
    </div>
  );
}

export default SearchBar;
