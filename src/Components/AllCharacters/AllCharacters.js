import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import ErrorComponent from "../ErrorPage/ErrorPage";
import PropTypes from 'prop-types';

function AllCharacters({ characters, favoriteIds, onToggleFavorite }) {

    characters.forEach(character => {
      if (character.gender === undefined) {
         character.gender = "non-binary";
      }
    });

    if (!characters) {
        return <ErrorComponent message="No characters available." />;
    }

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
    characters: PropTypes.array.isRequired,
    favoriteIds: PropTypes.object.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};

export default AllCharacters;
