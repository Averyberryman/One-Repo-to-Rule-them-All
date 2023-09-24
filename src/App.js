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
import SearchComponent from "./Components/Search/Search";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";
import ErrorComponent from "./Components/ErrorPage/ErrorPage";

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteIds, setFavoriteIds] = useState(new Set());

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favoriteIds);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavoriteIds(newFavorites);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.name && movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredBooks = books.filter(
    (book) =>
      book.name && book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredCharacters = characters.filter(
    (character) =>
      character.name &&
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <SearchComponent onSearch={setSearchTerm} />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <p>Loading...</p>
              ) : (
                <div className="App-body">
                  <AllMovies
                    movies={filteredMovies}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={toggleFavorite}
                  />
                  <AllBooks
                    books={filteredBooks}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={toggleFavorite}
                  />
                  <AllCharacters
                    characters={filteredCharacters}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={toggleFavorite}
                  />
                </div>
              )
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                books={books}
                characters={characters}
                movies={movies}
                favoriteIds={favoriteIds}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="*" element={<ErrorComponent message="Page not found." />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
