import { useParams } from "react-router-dom";
import { usePokeStore } from "../../../store/store";
import { useEffect } from "react";
import PokemonCard from "../../../components/pokemonCard/PokemonCard";

/*
  There is a bug here, the user type the type of the pokemon the page doesn't display anything but when he press the link all the pokemon will show up
  theory, 
  by typing in the url will refresh the page meaning that all the pokemonArr will be empty, to address this issues we need to create a function where IF pokemonArr is empty then fetch the api again but 

*/

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
  }, [pokemonType]);

  return (
    <>
      {currentPokemonType.map(({ name, sprite, type }) => (
        <PokemonCard name={name} type={type} sprite={sprite} />
      ))}
    </>
  );
}
