import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchBooks, fetchMovies } from './APICalls';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetchBooks()
      .then(data => {
        setBooks(data);
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
