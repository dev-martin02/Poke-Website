import { Link } from "react-router-dom";
import { pokeApi } from "../../util/pokeApi";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBars";
import TypeTag from "../../components/typeTag/TypeTag";
import PokeTypeNav from "./functions/PokeTypeNav";

/*
  Todo: Find a Better way to handle the fetch, should all the content of the fetch be in a store?
   **Keep in mind 
    When the user click any type of pokemon the page should only render pokemon of that type and that will require another request

   When we click 'see more' we should see all the info of that particular pokemon, and that will request another fetch to the poke Api  
*/

export default function Home() {
  const [pokeArr, setPokeArr] = useState([]);

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
            <div className="mx-2 my-3 p-2 flex shadow-xl ring-1 ring-slate-100">
              <img src={sprite} alt="Pokemon Image" />
              <div id="card-content" className="mx-10 flex flex-col">
                <p>{name}</p>
                <div>
                  {type.map((element) => (
                    <TypeTag types={element}>{element}</TypeTag>
                  ))}
                </div>
                {/* Todo: Make a btn component that the background-color change in base of the pokemon type */}
                <button className="bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white my-2 py-1 px-2 border border-gray-500 hover:border-transparent rounded">
                  See More
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
