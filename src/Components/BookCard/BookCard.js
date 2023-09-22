import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'

function BookCard({ book }) {
  return (
    <div className="book-card">
      <Link to={`/book/${book._id}`}>
        <h3>{book.name}</h3>
      </Link>
    </div>
  );
}

export default BookCard;
