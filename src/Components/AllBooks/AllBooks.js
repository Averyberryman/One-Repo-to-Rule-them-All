import React from 'react';
import BookCard from '../BookCard/BookCard';
import './AllBooks.css';
import PropTypes from 'prop-types'

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


AllBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoriteIds: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default AllBooks;
