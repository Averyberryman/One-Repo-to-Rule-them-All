import React from 'react';
import BookCard from '../BookCard/BookCard';
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';
import './FavoritesPage.css';

function FavoritesPage({ books, characters, movies, favoriteIds, onToggleFavorite }) {
    const favoriteBooks = books.filter(book => favoriteIds.has(book._id));
    const favoriteCharacters = characters.filter(character => favoriteIds.has(character._id));
    const favoriteMovies = movies.filter(movie => favoriteIds.has(movie._id));

    return (
        <div className="favorites-container App-body">
            <h2>Favorites:</h2>

            <div className="favorites-grid">
                {favoriteBooks.map(book => (
                    <BookCard key={book._id} book={book} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
                ))}

                {favoriteCharacters.map(character => (
                    <CharacterCard key={character._id} character={character} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
                ))}

                {favoriteMovies.map(movie => (
                    <MovieCard key={movie._id} movie={movie} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
                ))}
            </div>
        </div>
    );
}

export default FavoritesPage;
