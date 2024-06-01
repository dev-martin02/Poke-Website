import React, { useEffect, useState } from "react";
import { usePokeStore } from "../../store/store";

/*
  Improve ui of the pagination bar
  there is a bug in the pagination, when the user change to another type and he is on page 5 in the other type will show up all pokemon of page number 5 
*/
const Pagination = ({ arr }) => {
  const { pokemonArr, currentPages, setCurrentPages, setCurrentPokemonType } =
    usePokeStore();
  const [currentPage, setCurrentPage] = useState(1);

  const pokemonPerPages = 20;
  const totalPages = Math.ceil(arr.length / pokemonPerPages);

  // array start at 0, so we need to rest 1. then multiply by the items in the pages
  const startIndex = (currentPage - 1) * pokemonPerPages;

  // where the indexStart until the all items per pages are done
  const currentItems = arr.slice(startIndex, startIndex + pokemonPerPages);

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPages(currentItems);
  }, [arr, currentPage]);

  return (
    <>
      {pages.map((pageNumber) => (
        <button onClick={() => setCurrentPage(pageNumber + 1)}>
          {pageNumber + 1}
        </button>
      ))}
    </>
  );
};

export default Pagination;
