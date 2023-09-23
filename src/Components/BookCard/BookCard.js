import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'

function BookCard({ book, favoriteIds, onToggleFavorite }) {
  const isFavorite = favoriteIds.has(book._id);

  return (
    <div className="book-card">
      <Link to={`/book/${book._id}`}>
        <h3>{book.name}</h3>
      </Link>
      <button className="favorite-button" onClick={() => onToggleFavorite(book._id)}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}

export default BookCard;
