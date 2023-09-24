import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie } from "../../APICalls";
import ErrorComponent from "../ErrorPage/ErrorPage";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSingleMovie(id);
        if (data && data.length > 0) {
          setMovie(data[0]);
        } else {
          throw new Error("Movie not found");
        }
      } catch (error) {
        console.error("Failed to fetch movie:", error);
        setError(error.message);
      }
    }
    fetchData();
  }, [id]);

  if (error) {
    return <ErrorComponent message={error} />;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

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
