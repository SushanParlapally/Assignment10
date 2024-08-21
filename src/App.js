import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import FavoriteList from './components/FavoriteList';
import MovieForm from './components/MovieForm';
import './App.css';
import { fetchMovies, fetchFavorites, addMovie, deleteMovie, addFavorite, deleteFavorite } from './api';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
    fetchFavorites().then(setFavorites);
  }, []);
  console.log(movies);

  const handleAddMovie = (movie) => {
    addMovie(movie).then(newMovie => setMovies([...movies, newMovie]));
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => setMovies(movies.filter(movie => movie.id !== id)));
  };

  const handleAddFavorite = (movie) => {
    addFavorite(movie).then(newFavorite => setFavorites([...favorites, newFavorite]));
  };

  const handleRemoveFavorite = (id) => {
    deleteFavorite(id).then(() => setFavorites(favorites.filter(favorite => favorite.id !== id)));
  };

  return (
    <div className="container">
      <h1>Movie App</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} onAddFavorite={handleAddFavorite} />
      <FavoriteList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
    </div>
  );
}

export default App;
