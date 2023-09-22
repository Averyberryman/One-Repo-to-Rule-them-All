import React from 'react';
import './MovieCard.css'

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <p><strong>Runtime:</strong> {movie.runtimeInMinutes} minutes</p>
      <p><strong>Budget:</strong> ${movie.budgetInMillions} million</p>
      <p><strong>Box Office Revenue:</strong> ${movie.boxOfficeRevenueInMillions} million</p>
      <p><strong>Academy Award Nominations:</strong> {movie.academyAwardNominations}</p>
      <p><strong>Academy Award Wins:</strong> {movie.academyAwardWins}</p>
      <p><strong>Rotten Tomatoes Score:</strong> {movie.rottenTomatoesScore}%</p>
    </div>
  );
}

export default MovieCard;
