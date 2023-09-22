import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCharacter } from "../../APICalls";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSingleCharacter(id);
        setCharacter(result[0]);
      } catch (error) {
        console.error("Failed to fetch character:", error);
      }
    };
    fetchData();
  }, [id]);

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
