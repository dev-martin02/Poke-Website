import { useEffect, useState } from "react";
import TypeTag from "../typeTag/TypeTag";
import Pagination from "../pagination/Pagination";
import { usePokeStore } from "../../store/store";
import pokemonStyle from "../pokemonStyle";

export default function PokemonCard({ name, sprite, type, index }) {
  const { pokemonArr } = usePokeStore();
  const [pokeCard, setPokeCard] = useState({});

  useEffect(() => {
    const pokeType = type[0];
    const style = pokemonStyle[pokeType] || {};
    setPokeCard(style);
  }, [type]);

  return (
    <>
      <div
        className={`rounded-md grid grid-cols-2 p-3 gap-7 shadow-xl ${pokeCard.ringColor}  ${pokeCard.background} h-28 w-48`}
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
          <div className=" h-16 w-20 ">
            <img className=" w-max h-max" src={sprite} alt="pokemon Sprite" />
          </div>
        </div>
      </div>
    </>
  );
}
