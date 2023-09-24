import React, { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import ErrorComponent from "../ErrorPage/ErrorPage";
import PropTypes from 'prop-types';
import { fetchCharacter } from "../../APICalls";

function AllCharacters({ favoriteIds, onToggleFavorite }) {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await fetchCharacter();
          setCharacters(data);
        } catch (error) {
          setError(error.message);
        }
      }
      fetchData();
    }, []);

    characters.forEach(character => {
      if (character.gender === undefined) {
         character.gender = "non-binary";
      }
    });

    if (error) {
        return <ErrorComponent message={error} />;
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
    favoriteIds: PropTypes.object.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};

export default AllCharacters;
