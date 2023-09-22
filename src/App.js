import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchBooks, fetchMovies, fetchCharacter } from "./APICalls";
import AllBooks from "./Components/AllBooks/AllBooks";
import AllMovies from "./Components/AllMovies/AllMovies";
import AllCharacters from "./Components/AllCharacters/AllCharacters";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./Components/MovieDetails/MovieDetails";
import CharacterDetail from "./Components/CharacterDetails/CharacterDetails";
import BookDetail from "./Components/BookDetails/BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const booksData = await fetchBooks();
        const moviesData = await fetchMovies();
        const charactersData = await fetchCharacter();
        setBooks(booksData);
        setMovies(moviesData);
        setCharacters(charactersData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <p>Loading...</p>
              ) : (
                <div className="App-header">
                  <AllMovies movies={movies} />
                  <AllBooks books={books} />
                  <AllCharacters characters={characters} />
                </div>
              )
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
