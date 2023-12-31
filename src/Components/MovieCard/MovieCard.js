import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'
import PropTypes from 'prop-types'

function MovieCard({ movie, favoriteIds, onToggleFavorite }) {
  const isFavorite = favoriteIds.has(movie._id);

  const handleFavoriteClick = (e, id) => {
    e.stopPropagation();
    onToggleFavorite(id);
  }

  return (
    <div className="movie-card">
      <div>
      <Link to={`/movie/${movie._id}`}>
        <h3>{movie.name}</h3>
        <p><strong>Runtime:</strong> {movie.runtimeInMinutes} minutes</p>
      </Link>
      </div>
      <button className='favorite-button' onClick={(e) => handleFavoriteClick(e, movie._id)}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  favoriteIds: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default MovieCard;

