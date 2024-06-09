import { Link } from "react-router-dom";
import pokemonStyle from "../pokemonStyle";
import { useState } from "react";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rigthArrow.svg";

export default function PokeTypeNav() {
  const [currentTypePage, setCurrentTypePage] = useState(0);
  // Make an arr with all the type of pokemon
  const arrPokemonType = Object.keys(pokemonStyle);

  const tagPerPage = 6; // how many type you would like to show

  // how many page that will have 5 tags will fit in the div with the current arrPokemonType
  const totalPageLength = Math.ceil(arrPokemonType.length / tagPerPage);

  // Get the numbers in an array
  const pages = [];
  for (let i = 0; i < totalPageLength; i++) {
    pages.push(i);
  }

  // get the started index
  const startIndex = currentTypePage * tagPerPage;

  // Use the slice method to get just 5 types tags
  const currentPageOfPokemon = arrPokemonType.slice(
    startIndex, // Start in 0
    startIndex + tagPerPage // Ends in 5
  );

  const handleNext = () => setCurrentTypePage(currentTypePage + 1);
  const handlePrevious = () => setCurrentTypePage(currentTypePage - 1);

  return (
    <nav className="flex sm:flex-col align-middle justify-around w-52">
      {/* Create a button where it shows all the pokemon Types to choose */}
      <div className="flex flex-row-reverse ">
        {currentTypePage < 2 && (
          <button onClick={handleNext} className="w-10">
            <img src={rightArrow} alt="rightArrow" />
          </button>
        )}
        {currentTypePage > 0 && (
          <button onClick={handlePrevious} className="w-10">
            <img src={leftArrow} alt="leftArrow" />
          </button>
        )}
      </div>

      {currentPageOfPokemon.map((pokemonType, index) => (
        <div
          className={`p-2 m-2 rounded-lg font-semibold text-sm flex align-middle ${pokemonStyle[pokemonType].background} ${pokemonStyle[pokemonType].fontColor}`}
        >
          <img
            src={pokemonStyle[pokemonType].backgroundImg}
            alt=""
            className=" h-5"
          />
          <Link key={index} to={`/${pokemonType}`}>
            {pokemonType}
          </Link>
        </div>
      ))}
    </nav>
  );
}
