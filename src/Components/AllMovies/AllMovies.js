import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './AllMovies.css';

function AllMovies({ movies, favoriteIds, onToggleFavorite }) {
    return (
        <div className="movies-container">
            <h2>Movies</h2>
            <div className='movies-grid'>
                {movies.map(movie => (
                    <MovieCard key={movie._id} movie={movie} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
                ))}
            </div>
        </div>
    );
}

export default AllMovies;
