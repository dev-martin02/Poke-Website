import { Link, useParams } from "react-router-dom";
import { pokeApi } from "../../util/pokeApi";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBars";
import PokeTypeNav from "../../components/navBar/PokeTypeNav";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { usePokeStore } from "../../store/store";
import TypePokemon from "../../components/typeTag/TypePokemon";
import Pagination from "../../components/pagination/Pagination";

export default function Home() {
  /*
 improve Mobile design and change the background color depending of the type
 add functionality to Login and choose a type
 Once you are in the page display random pokemon 
*/
  const { pokemonArr, setPokemonArr, currentPages, currentPokemonType } =
    usePokeStore();

  const params = useParams();

  async function getTwoPokemon() {
    const response = await fetch(pokeApi + "/pokemon?limit=400");
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
    setPokemonArr(pokemonWithSprites);
  }

  useEffect(() => {
    getTwoPokemon();
  }, [params]);

  const pokemons = currentPages.length > 0 || pokemonArr;
  const currentPage = currentPokemonType || pokemonArr;

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
        <section className=" sm:flex ">
          <section className="relative ">
            <NavBar>
              <PokeTypeNav />
            </NavBar>
          </section>

          <div className="flex justify-center flex-col align-middle  items-center">
            <section
              id="PokemonCard"
              className="  gap-3  sm:grid sm:grid-cols-3  lg:grid-cols-5 "
            >
              {Object.keys(params).length > 0 ? (
                <TypePokemon />
              ) : (
                <>
                  {pokemons.map(({ name, sprite, type }, index) => (
                    <PokemonCard
                      name={name}
                      sprite={sprite}
                      type={type}
                      index={index}
                    />
                  ))}
                </>
              )}
            </section>
            <Pagination arr={currentPage} />
          </div>
        </section>
      </main>
    </>
  );
}
