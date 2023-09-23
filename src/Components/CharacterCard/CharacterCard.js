import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

function CharacterCard({ character, favoriteIds, onToggleFavorite }) {
  const isFavorite = favoriteIds.has(character._id);

  return (
    <div className="character-card">
      <Link to={`/character/${character._id}`}>
        <h3>{character.name}</h3>
        <p><strong>Race:</strong> {character.race}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
      </Link>
      {character.wikiUrl && (
        <p>
          <a href={character.wikiUrl} target="_blank" rel="noopener noreferrer">
            Read more on LOTR Wiki
          </a>
        </p>
      )}
      <button className="favorite-button" onClick={() => onToggleFavorite(character._id)}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}

export default CharacterCard;
