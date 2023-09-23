import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types'

function AllCharacters({ characters, favoriteIds, onToggleFavorite }) {
  return (
    <div className="character-container">
        <h2>Characters</h2>
        <div className='characters-grid'>
      {characters.map(character => (
          <CharacterCard key={character._id} character={character} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
        ))}
    </div>
    </div>
  );
}

AllCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  favoriteIds: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default AllCharacters;
