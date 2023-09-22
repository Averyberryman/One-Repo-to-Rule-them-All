import React from 'react';
import './BookCard.css'

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.name}</h3>
      {/* You can add other details about the book if needed */}
    </div>
  );
}

export default BookCard;
