import React from 'react';
import './CharacterCard.css'

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p><strong>Race:</strong> {character.race}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      {character.wikiUrl && (
        <p>
          <a href={character.wikiUrl} target="_blank" rel="noopener noreferrer">Read more on LOTR Wiki</a>
        </p>
      )}
    </div>
  );
}

export default CharacterCard;
