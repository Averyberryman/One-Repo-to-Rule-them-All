import React from 'react';
import './Search.css'

function SearchComponent({ onSearch }) {
    return (
        <div className="search-component">
            <input 
                type="text" 
                placeholder="Search movies, books, characters..." 
                onChange={e => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchComponent;
