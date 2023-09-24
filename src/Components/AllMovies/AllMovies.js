import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import ErrorComponent from "../ErrorPage/ErrorPage";
import './AllMovies.css';
import PropTypes from 'prop-types';
import { fetchMovies } from "../../APICalls";

function AllMovies({ favoriteIds, onToggleFavorite }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await fetchMovies();
          setMovies(data);
        } catch (error) {
          setError(error.message);
        }
      }
      fetchData();
    }, []);

    if (error) {
        return <ErrorComponent message={error} />;
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
    favoriteIds: PropTypes.object.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};
  
export default AllMovies;
