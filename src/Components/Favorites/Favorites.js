import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import BookCard from '../BookCard/BookCard';
import CharacterCard from '../CharacterCard/CharacterCard';

function Favorites({ favorites }) {
  return (
    <div className="favorites-container">
      <h2>Favorited Movies</h2>
      {favorites.movies.map(movie => <MovieCard key={movie._id} movie={movie} />)}

      <h2>Favorited Books</h2>
      {favorites.books.map(book => <BookCard key={book._id} book={book} />)}

      <h2>Favorited Characters</h2>
      {favorites.characters.map(character => <CharacterCard key={character._id} character={character} />)}
    </div>
  );
}

export default Favorites;
