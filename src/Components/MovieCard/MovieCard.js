import React from 'react';
import './MovieCard.css'

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <p><strong>Runtime:</strong> {movie.runtimeInMinutes} minutes</p>
    </div>
  );
}

export default MovieCard;
