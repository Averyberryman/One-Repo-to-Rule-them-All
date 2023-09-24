import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCharacter } from "../../APICalls";
import ErrorComponent from "../ErrorPage/ErrorPage";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSingleCharacter(id);
        if (result && result.length > 0) {
          setCharacter(result[0]);
        } else {
          throw new Error("Character not found");
        }
      } catch (error) {
        console.error("Failed to fetch character:", error);
        setError(error.message);  // Setting error to the state
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return <ErrorComponent message={error} />;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="character-detail-container">
      <h2>{character.name}</h2>
      <p>
        <strong>Race:</strong> {character.race}
      </p>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      {character.spouse && (
        <p>
          <strong>Spouse:</strong> {character.spouse}
        </p>
      )}
      {character.wikiUrl && (
        <p>
          <a href={character.wikiUrl} target="_blank" rel="noopener noreferrer">
            Read more on LOTR Wiki
          </a>
        </p>
      )}
    </div>
  );
}

export default CharacterDetail;
