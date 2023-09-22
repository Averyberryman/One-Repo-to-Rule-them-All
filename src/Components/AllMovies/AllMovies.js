import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './AllMovies.css';
import { Link } from 'react-router-dom'

function AllMovies({ movies }) {
    return (
        <div className="movies-container">
          {movies.map(movie => (
            <Link to={`/movie/${movie._id}`} key={movie._id}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      );
}

export default AllMovies;
