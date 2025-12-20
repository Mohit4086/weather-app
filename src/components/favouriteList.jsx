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
