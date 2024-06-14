import React, { useEffect, useState } from "react";
import { usePokeStore } from "../../store/store";

/*
  Improve ui of the pagination bar
  Add pagination to the home page
  */
const Pagination = ({ arr }) => {
  const { setCurrentPages } = usePokeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentButtonSet, setCurrentButtonSet] = useState(0);

  const pokemonPerPages = 12;
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

  useEffect(() => {
    setCurrentPage(1);
    setCurrentButtonSet(0);
  }, [arr]);

  const handlePreviousSet = () => {
    setCurrentButtonSet((prev) => Math.max(prev - 1, 0));
  };

  const handleNextSet = () => {
    if (
      !currentButtons.find((numberInThisRow) => numberInThisRow === currentPage)
    ) {
      setCurrentButtonSet((prev) => Math.min(prev + 1, totalButtonSets - 1));
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentButtons = pages.slice(
    currentButtonSet * buttonsPerSet,
    (currentButtonSet + 1) * buttonsPerSet
  );

  return (
    <>
      <div className="ring-2 m-2 w-40 p-1">
        {currentButtonSet > 0 && (
          <button onClick={handlePreviousSet} className="">
            Previous
          </button>
        )}
        {currentButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            style={{
              fontWeight: currentPage === pageNumber ? "bold" : "normal",
            }}
            className="m-1"
          >
            {pageNumber}
          </button>
        ))}
        {currentButtonSet < totalButtonSets - 1 && (
          <button onClick={handleNextSet}>Next</button>
        )}
      </div>
    </>
  );
};

export default Pagination;
