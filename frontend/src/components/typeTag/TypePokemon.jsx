import { useParams } from "react-router-dom";
import { usePokeStore } from "../../store/store";
import { useEffect } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";
import Pagination from "../pagination/Pagination";

export default function TypePokemon() {
  const {
    currentPokemonType,
    currentPages,
    setCurrentPokemonType,
    pokemonArr,
  } = usePokeStore();

  const { pokemonType } = useParams();

  pokemonArr;

  function getPokemonType(tagType) {
    const filteredPokemon = pokemonArr.filter((pokemon) =>
      pokemon.type.includes(tagType.toLowerCase())
    );
    setCurrentPokemonType(filteredPokemon);
  }

  useEffect(() => {
    getPokemonType(pokemonType);
  }, [pokemonType, pokemonArr]);

  return (
    <>
      {currentPages &&
        currentPages.map(({ name, sprite, type }) => (
          <PokemonCard name={name} type={type} sprite={sprite} />
        ))}
      <Pagination arr={currentPokemonType} />
    </>
  );
}
