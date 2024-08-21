import React from 'react';
function FavoriteList({ favorites, onRemoveFavorite }) {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            <img src={favorite.image} alt={favorite.title} style={{ width: '100px', height: '150px' }} />
            <h3>{favorite.title}</h3>
            <p>{favorite.genre}</p>
            <button onClick={() => onRemoveFavorite(favorite.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
