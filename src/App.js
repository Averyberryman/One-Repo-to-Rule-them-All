import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchBooks, fetchMovies } from './APICalls'

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchBooks(), fetchMovies()])
      .then(([booksData, moviesData]) => {
        setBooks(booksData);
        setMovies(moviesData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Books:</p>
            <ul>
              {books.map(book => (
                <li key={book._id}>{book.name}</li>
              ))}
            </ul>
            
            <p>Movies:</p>
            <div>
              {movies.map(movie => (
                <div key={movie._id} className="movie-card">
                  <h3>{movie.name}</h3>
                  <p><strong>Runtime:</strong> {movie.runtimeInMinutes} minutes</p>
                  <p><strong>Budget:</strong> ${movie.budgetInMillions} million</p>
                  <p><strong>Box Office Revenue:</strong> ${movie.boxOfficeRevenueInMillions} million</p>
                  <p><strong>Academy Award Nominations:</strong> {movie.academyAwardNominations}</p>
                  <p><strong>Academy Award Wins:</strong> {movie.academyAwardWins}</p>
                  <p><strong>Rotten Tomatoes Score:</strong> {movie.rottenTomatoesScore}%</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
