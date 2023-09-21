import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchBooks, fetchMovies } from './APICalls'
import BookCard from './Components/BookCard/BookCard'
import MovieCard from './Components/MovieCard/MovieCard'

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const booksData = await fetchBooks();
        const moviesData = await fetchMovies();
        setBooks(booksData);
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    }

    fetchData();
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
            <div>
              {books.map(book => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
            
            <p>Movies:</p>
            <div>
              {movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} />
              ))}
            </div>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
