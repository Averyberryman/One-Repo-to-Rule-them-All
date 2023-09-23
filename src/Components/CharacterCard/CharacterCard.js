import React from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";
import PropTypes from 'prop-types'

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

CharacterCard.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }).isRequired,
  favoriteIds: PropTypes.object.isRequired,
  onToggleFavorite: PropTypes.func.isRequired
};

export default CharacterCard;
