import React, { useState, useEffect } from 'react';
import { fetchSingleMovie } from '../../APICalls';
import { useParams } from 'react-router-dom';

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSingleMovie(id);
        setMovie(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>No movie found</p>;

  return (
    <div className="movie-detail-container">
      <h2>{movie.name}</h2>
      <p><strong>Runtime:</strong> {movie.runtimeInMinutes} minutes</p>
      <p><strong>Budget:</strong> ${movie.budgetInMillions} million</p>
      <p><strong>Box Office Revenue:</strong> ${movie.boxOfficeRevenueInMillions} million</p>
      <p><strong>Academy Award Nominations:</strong> {movie.academyAwardNominations}</p>
      <p><strong>Academy Award Wins:</strong> {movie.academyAwardWins}</p>
      <p><strong>Rotten Tomatoes Score:</strong> {movie.rottenTomatoesScore}%</p>
    </div>
  );
}

export default MovieDetail;
