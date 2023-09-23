import React from 'react';
import BookCard from '../BookCard/BookCard';
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';
import './FavoritesPage.css';
import PropTypes from 'prop-types'

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

FavoritesPage.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    favoriteIds: PropTypes.object.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
  };

export default FavoritesPage;
