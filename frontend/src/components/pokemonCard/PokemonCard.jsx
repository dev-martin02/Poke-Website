import { useEffect, useState } from "react";
import TypeTag from "../typeTag/TypeTag";

export default function PokemonCard({ name, sprite, type }) {
  const [pokeCard, setPokeCard] = useState({});

  useEffect(() => {
    let pokeType;
    for (let i = 0; i < type.length; i++) {
      pokeType = type[0];
    }
    /* 
        Create a class called style
    */
    let style;
    switch (pokeType) {
      case "fire":
        style = {
          ringColor: "ring-red-500",
          background: "bg-red-500",
          fontColor: "text-white",
        };
        setPokeCard(style);
        break;
      case "poison":
        style = {
          ringColor: "ring-purple-500",
          background: "bg-purple-500",
          fontColor: "text-white",
        };
        setPokeCard(style);
        break;
      case "grass":
        style = {
          ringColor: "ring-lime-600",
          background: "bg-lime-600",
          fontColor: "text-white",
        };
        setPokeCard(style);
        break;
      case "flying":
        setPokeCard("ring-sky-300");
        break;
      case "water":
        style = {
          ringColor: "ring-blue-600",
          background: "bg-blue-600",
          fontColor: "text-white",
        };
        setPokeCard(style);
        break;
      default:
        style = {
          ringColor: "ring-gray-500",
        };
        setPokeCard(style);
    }
  }, [type]);

  return (
    <div
      className={`mx-2 my-3 p-2 flex shadow-xl ring-1 ${pokeCard.ringColor} `}
    >
      <img src={sprite} alt="Pokemon Image" />
      <div id="card-content" className="mx-10 flex flex-col">
        <p>{name}</p>
        <div>
          {type.map((element) => (
            <TypeTag types={element}>{element}</TypeTag>
          ))}
        </div>
        {/* Todo: Make a btn component that the background-color change in base of the pokemon type */}
        <button
          className={`${pokeCard.background} ${pokeCard.fontColor} hover:bg-gray-500 text-white-700 font-semibold hover:text-white my-2 py-1 px-2 border border-gray-500 hover:border-transparent rounded`}
        >
          See More
        </button>
      </div>
    </div>
  );
}
