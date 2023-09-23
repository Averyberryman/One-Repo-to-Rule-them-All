import React from 'react';
import BookCard from '../BookCard/BookCard';
import './AllBooks.css';

function AllBooks({ books, favoriteIds, onToggleFavorite }) {
  return (
    <div className='book-container'>
      <div className="all-books-container">
        <h2>Books</h2>
        <div className="books-grid">
          {books.map(book => (
            <BookCard key={book._id} book={book} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
