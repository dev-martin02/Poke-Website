import { useEffect, useState } from "react";
import TypeTag from "../typeTag/TypeTag";
import Pagination from "../pagination/Pagination";
import { usePokeStore } from "../../store/store";

const styles = {
  fire: {
    ringColor: "ring-orange-400",
    background: "bg-orange-400",
    fontColor: "text-white",
    borderColor: "border-orange-400",
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
  const { pokemonArr } = usePokeStore();
  const [pokeCard, setPokeCard] = useState({});

  useEffect(() => {
    const pokeType = type[0];
    const style = styles[pokeType] || {};
    setPokeCard(style);
  }, [type]);

  return (
    <>
      <div
        className={`rounded-md grid grid-cols-2 p-2 gap-7 shadow-xl ${pokeCard.ringColor}  ${pokeCard.background} h-28 w-48`}
        key={index}
      >
        <div className={`flex flex-col justify-between ${pokeCard.fontColor}`}>
          <p>{name}</p>
          <div className="flex flex-col-reverse mb-0">
            {type.map((element) => (
              <TypeTag key={element} types={element}>
                {element}
              </TypeTag>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div class=" h-16 w-20 ">
            <img class=" w-max h-max" src={sprite} alt="pokemon Sprite" />
          </div>
        </div>
      </div>
    </>
  );
}
