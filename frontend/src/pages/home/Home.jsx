import { Link } from "react-router-dom";
import { pokeApi } from "../../util/pokeApi";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBars";
import PokeTypeNav from "./functions/PokeTypeNav";
import PokemonCard from "../../components/pokemonCard/PokemonCard";

/*
  Todo: Find a Better way to handle the fetch, should all the content of the fetch be in a store?
   **Keep in mind 
    When the user click any type of pokemon the page should only render pokemon of that type and that will require another request

   When we click 'see more' we should see all the info of that particular pokemon, and that will request another fetch to the poke Api  
*/

export default function Home() {
  const [pokeArr, setPokeArr] = useState([]);

  // Can I out this in the store?
  async function getTwoPokemon() {
    const response = await fetch(pokeApi + "/pokemon?limit=9");
    const data = await response.json();

    const pokemonWithSprites = await Promise.all(
      data.results.map(async ({ url }) => {
        const response = await fetch(url);
        const pokemonData = await response.json();
        const getPokemonType = await pokemonData.types.map(({ type }) => {
          return type.name;
        });

        return {
          name: pokemonData.name,
          sprite: pokemonData.sprites.front_default,
          type: getPokemonType,
        };
      })
    );
    setPokeArr(pokemonWithSprites);
  }

  useEffect(() => {
    getTwoPokemon();
  }, []);
  return (
    <>
      <header className="flex justify-between items-center py-4 px-8">
        <h1 className="text-xl font-bold">Poke-Website</h1>

        <nav className="flex items-center">
          <a href="#" className="ml-4">
            Home
          </a>
          <Link to="/login" className="ml-4">
            Login
          </Link>
          <a href="#" className="ml-4">
            Choose a Type
          </a>
        </nav>
      </header>

      <main className="flex flex-col my-4">
        <h2 className="flex justify-center text-xl font-bold">
          Welcome to the BEST POKEMON website{" "}
        </h2>
        {/* in mobile version this bar-nav should be able to drag to show all the pokemon type */}
        <NavBar>
          <PokeTypeNav />
        </NavBar>

        <section id="PokemonCard" className="">
          {pokeArr.map(({ name, sprite, type }) => (
            <PokemonCard name={name} sprite={sprite} type={type} />
          ))}
        </section>
      </main>
    </>
  );
}
