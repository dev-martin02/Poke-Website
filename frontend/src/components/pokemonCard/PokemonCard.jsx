import { useEffect, useState } from "react";
import TypeTag from "../typeTag/TypeTag";

const styles = {
  fire: {
    ringColor: "ring-red-500",
    background: "bg-red-500",
    fontColor: "text-white",
    borderColor: "border-red-500",
  },
  poison: {
    ringColor: "ring-purple-500",
    background: "bg-purple-500",
    fontColor: "text-white",
    borderColor: "border-purple-500",
  },
  grass: {
    ringColor: "ring-lime-600",
    background: "bg-lime-600",
    fontColor: "text-white",
    borderColor: "border-lime-600",
  },
  flying: {
    ringColor: "ring-sky-300",
    background: "bg-sky-600",
    fontColor: "text-white",
    borderColor: "bg-sky-600",
  },
  water: {
    ringColor: "ring-blue-600",
    background: "bg-blue-600",
    fontColor: "text-white",
    borderColor: "border-blue-600",
  },
  electric: {
    ringColor: "ring-yellow-400",
    background: "bg-yellow-400",
    fontColor: "text-white",
    borderColor: "border-yellow-400",
  },
};

export default function PokemonCard({ name, sprite, type, index }) {
  const [pokeCard, setPokeCard] = useState({});

  useEffect(() => {
    const pokeType = type[0];
    const style = styles[pokeType] || {};
    setPokeCard(style);
  }, [type]);

  return (
    <div
      className={`mx-2 my-3 p-2 flex shadow-xl ring-2 ${pokeCard.ringColor} lg:flex-row`}
      key={index}
    >
      <img src={sprite} alt="Pokemon Image" />
      <div id="card-content" className="mx-10 flex flex-col">
        <p>{name}</p>
        <div>
          {type.map((element) => (
            <TypeTag key={element} types={element}>
              {element}
            </TypeTag>
          ))}
        </div>

        <button
          className={`${pokeCard.background} ${pokeCard.fontColor} ${pokeCard.borderColor} hover:bg-gray-500 text-white-700 font-semibold hover:text-white my-2 py-1 px-2 border hover:border-transparent rounded`}
        >
          See More
        </button>
      </div>
    </div>
  );
}
