import React from 'react';
import BookCard from '../BookCard/BookCard';
import ErrorComponent from "../ErrorPage/ErrorPage";
import './AllBooks.css';
import PropTypes from 'prop-types';

function AllBooks({ books, favoriteIds, onToggleFavorite }) {

    if (!books) {
        return <ErrorComponent message="No books available." />;
    }

    return (
        <div className='book-container'>
            <h2>Books</h2>
            <div className="books-grid">
                {books.map(book => (
                    <BookCard key={book._id} book={book} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
                ))}
            </div>
        </div>
    );
}

AllBooks.propTypes = {
    books: PropTypes.array.isRequired,
    favoriteIds: PropTypes.object.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};

export default AllBooks;
