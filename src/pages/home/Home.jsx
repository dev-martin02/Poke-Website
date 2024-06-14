import { Link, useParams } from "react-router-dom";
import { pokeApi } from "../../util/pokeApi";
import { useEffect, useState } from "react";
import PokeTypeNav from "../../components/navBar/PokeTypeNav";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import { usePokeStore } from "../../store/store";
import TypePokemon from "../../components/typeTag/TypePokemon";
import Pagination from "../../components/pagination/Pagination";

export default function Home() {
  /*
    Improve navBar in mobile design when I click the choose type button it should display a big div in top of everything showing all the type of pokemon
    Add loading state
  */
  const { pokemonArr, setPokemonArr, currentPages, currentPokemonType } =
    usePokeStore();

  const [chooseTypeDiv, setChooseTypeDiv] = useState(true);

  function showTypeDiv() {
    setChooseTypeDiv(!chooseTypeDiv);
  }

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
        <nav className="flex items-center sm:hidden">
          <button onClick={showTypeDiv}>Choose a Type</button>
        </nav>
      </header>

      <main className="flex flex-col my-4">
        <h2 className="flex justify-center text-xl font-bold">
          Welcome to the BEST POKEMON website{" "}
        </h2>

        <section className="sm:flex">
          {chooseTypeDiv && (
            <section className="absolute">
              <PokeTypeNav />
            </section>
          )}

          <section className=" hidden sm:relative">
            <PokeTypeNav />
          </section>

          <div className="flex justify-center flex-col align-middle items-center  ">
            <section
              id="PokemonCard"
              className="gap-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
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
