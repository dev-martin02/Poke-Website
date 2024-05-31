import { useParams } from "react-router-dom";
import { usePokeStore } from "../../store/store";
import { useEffect } from "react";
import PokemonCard from "../pokemonCard/PokemonCard";

export default function TypePokemon() {
  const {
    currentPokemonType,
    setCurrentPokemonType,
    pokemonArr,
    resetCurrentPokemonType,
  } = usePokeStore();

  const { pokemonType } = useParams();

  function getPokemonType(tagType) {
    const filteredPokemon = pokemonArr.filter((pokemon) =>
      pokemon.type.includes(tagType.toLowerCase())
    );
    resetCurrentPokemonType();
    filteredPokemon.forEach((pokemon) => setCurrentPokemonType(pokemon));
  }

  useEffect(() => {
    getPokemonType(pokemonType);
  }, [pokemonType, pokemonArr]);

  return (
    <>
      {currentPokemonType.map(({ name, sprite, type }) => (
        <PokemonCard name={name} type={type} sprite={sprite} />
      ))}
    </>
  );
}
