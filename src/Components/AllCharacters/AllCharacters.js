import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

function AllCharacters({ characters }) {
  return (
    <div className="character-container">
        <h2>Characters</h2>
        <div className='characters-grid'>
      {characters.map(character => <CharacterCard key={character._id} character={character} />)}
    </div>
    </div>
  );
}

export default AllCharacters;
