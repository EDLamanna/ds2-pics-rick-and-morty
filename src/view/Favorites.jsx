import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContex";
import MyCard from "../components/MyCard";
import Footer from "../components/Footer";

const Favorites = () => {
  const { characterData } = useContext(CharacterContext);
  return (
    <div className="container">
      <h1 className="text-center p-5">
        Personajes Favoritos de Rick and Morty
      </h1>
      <div className="gallery grid-columns-2 p-3">
        {characterData &&
          characterData
            .filter((character) => character.like)
            .map((character) => (
              <MyCard key={character.id} characterData={character} />
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
