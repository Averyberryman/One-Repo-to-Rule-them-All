import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchBooks, fetchMovies, fetchCharacter } from './APICalls';
import AllBooks from './Components/AllBooks/AllBooks';
import AllMovies from './Components/AllMovies/AllMovies';
import AllCharacters from './Components/AllCharacters/AllCharacters';
import Header from './Components/Header/Header';

function App() {
    const [books, setBooks] = useState([]);
    const [movies, setMovies] = useState([]);
    const [characters, setCharacters] = useState([]); // don't forget to fetch characters as shown in previous steps
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
        <div className="App">
            <Header />
            <main>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <AllBooks books={books} />
                        <AllMovies movies={movies} />
                        <AllCharacters characters={characters} />
                    </>
                )}
            </main>
        </div>
    );
}

export default App;
