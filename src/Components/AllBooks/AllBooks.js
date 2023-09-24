import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import ErrorComponent from "../ErrorPage/ErrorPage";
import './AllBooks.css';
import PropTypes from 'prop-types';
import { fetchBooks } from "../../APICalls";

function AllBooks({ favoriteIds, onToggleFavorite }) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await fetchBooks();
          setBooks(data);
        } catch (error) {
          setError(error.message);
        }
      }
      fetchData();
    }, []);

    if (error) {
        return <ErrorComponent message={error} />;
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
    favoriteIds: PropTypes.object.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};
  
export default AllBooks;
