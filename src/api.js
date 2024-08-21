const API_URL = 'http://localhost:3000';

export const fetchMovies = async () => {
  const response = await fetch(`${API_URL}/movies`);
  console.log(response);
  return response.json();
};

export const fetchFavorites = async () => {
  const response = await fetch(`${API_URL}/favorites`);
  return response.json();
  
};

export const addMovie = async (movie) => {
  const response = await fetch(`${API_URL}/movies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
  });
  return response.json();
};

export const deleteMovie = async (id) => {
  await fetch(`${API_URL}/movies/${id}`, { method: 'DELETE' });
};

export const addFavorite = async (movie) => {
  const response = await fetch(`${API_URL}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
  });
  return response.json();
};

export const deleteFavorite = async (id) => {
  await fetch(`${API_URL}/favorites/${id}`, { method: 'DELETE' });
};
