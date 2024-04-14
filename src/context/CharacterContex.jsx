import { createContext, useEffect, useState } from "react";

export const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch character data");
        }
        const data = await response.json();
        const allData = data.results.map((character) => ({
          ...character,
          like: false,
        }));
        setCharacterData(allData);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CharacterContext.Provider value={{ characterData, setCharacterData }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
