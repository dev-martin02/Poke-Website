import { Link } from "react-router-dom";

import pokemonStyle from "../pokemonStyle";

Object.keys(pokemonStyle).map((pokemonType) => {
  console.log(pokemonStyle[pokemonType]);
});
export default function PokeTypeNav() {
  return (
    <>
      {Object.keys(pokemonStyle).map((pokemonType, index) => (
        <div
          className={`p-2 m-2 rounded-lg font-semibold text-sm flex align-middle ${pokemonStyle[pokemonType].background} ${pokemonStyle[pokemonType].fontColor}`}
        >
          <img
            src={pokemonStyle[pokemonType].backgroundImg}
            alt=""
            className=" h-5"
          />
          <Link key={index} to={`/${pokemonType}`}>
            {pokemonType}
          </Link>
        </div>
      ))}
      {/* {Object.keys(pokemonStyle).map((pokemonType) => (
        <p>{pokemonType}</p>
      ))} */}
    </>
  );
}
