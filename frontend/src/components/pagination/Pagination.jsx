import React, { useEffect, useState } from "react";
import { usePokeStore } from "../../store/store";

/*
  Improve ui of the pagination bar
  there is a bug in the pagination, when the user change to another type and he is on page 5 in the other type will show up all pokemon of page number 5 
*/
const Pagination = ({ arr }) => {
  const { setCurrentPages } = usePokeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentButtonSet, setCurrentButtonSet] = useState(0);

  const pokemonPerPages = 20;
  const totalPages = Math.ceil(arr.length / pokemonPerPages);

  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }

  const buttonsPerSet = 3;
  const totalButtonSets = Math.ceil(pages.length / buttonsPerSet);

  const startIndex = (currentPage - 1) * pokemonPerPages;

  const currentPageOfPokemon = arr.slice(
    startIndex,
    startIndex + pokemonPerPages
  );

  useEffect(() => {
    setCurrentPages(currentPageOfPokemon);
  }, [arr, currentPage, setCurrentPages]);

  const handlePreviousSet = () => {
    setCurrentButtonSet((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSet = () => {
    setCurrentButtonSet((prev) => Math.min(prev + 1, totalButtonSets - 1));
  };

  const currentButtons = pages.slice(
    currentButtonSet * buttonsPerSet,
    (currentButtonSet + 1) * buttonsPerSet
  );

  return (
    <>
      <div>
        {currentButtonSet > 0 && <button>Previous</button>}
        {currentButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            style={{
              fontWeight: currentPage === pageNumber ? "bold" : "normal",
            }}
          >
            {pageNumber}
          </button>
        ))}
        {currentButtonSet < totalButtonSets - 1 && <button>Next</button>}
      </div>
    </>
  );
};

export default Pagination;
