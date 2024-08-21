import React from 'react';

function MovieList({ movies, onDeleteMovie, onAddFavorite }) {
  return (
    <div>
      <h2>All Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.image} alt={movie.title} style={{ width: '100px', height: '150px' }} />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
            <button onClick={() => onAddFavorite(movie)}>Favorite</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
