import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import ErrorComponent from "../ErrorPage/ErrorPage";
import './AllMovies.css';
import PropTypes from 'prop-types';

function AllMovies({ movies, favoriteIds, onToggleFavorite }) {

    if (!movies) {
        return <ErrorComponent message="No movies available." />;
    }

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

AllMovies.propTypes = {
    movies: PropTypes.array.isRequired,
    favoriteIds: PropTypes.object.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};

export default AllMovies;
