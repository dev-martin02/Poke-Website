import React, { useState } from "react";
import { usePokeStore } from "../../store/store";

/*
  Find a way where you can use this components in both sites, pokemon nav bar and also pokemon cards


*/
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const { pokemonArr } = usePokeStore();

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = pokemonArr.slice(firstPostIndex, lastPostIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => page}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
