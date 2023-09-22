import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './AllMovies.css';

function AllMovies({ movies }) {
  return (
    <div className='movies-container'>
    <div className="all-movies-container">
      <h2>Movies</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default AllMovies;
