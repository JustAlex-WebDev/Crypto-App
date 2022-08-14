import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.floor(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="m-1">
            <Link onClick={() => paginate(number)} to="/">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
