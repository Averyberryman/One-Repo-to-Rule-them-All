import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

function AllCharacters({ characters }) {
  return (
    <div className="character-container">
      {characters.map(character => <CharacterCard key={character._id} character={character} />)}
    </div>
  );
}

export default AllCharacters;
