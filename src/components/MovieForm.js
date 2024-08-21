import React, { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre && image) {
      onAddMovie({ title, genre, image });
      setTitle('');
      setGenre('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie Title"
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
