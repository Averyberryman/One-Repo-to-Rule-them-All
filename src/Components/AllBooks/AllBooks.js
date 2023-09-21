import React from 'react';
import BookCard from '../BookCard/BookCard';
import './AllBooks.css';

function AllBooks({ books }) {
  return (
    <div className="all-books-container">
      <h2>Books</h2>
      <div className="books-grid">
        {books.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
