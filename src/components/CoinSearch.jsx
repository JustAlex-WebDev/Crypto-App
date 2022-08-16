import React, { useState, useEffect } from "react";
import CoinItem from "./CoinItem";
import ReactPaginate from "react-paginate";

const CoinSearch = ({ coins }) => {
  //   console.log(coins);

  const [searchText, setSearchText] = useState("");

  // Pagination
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(coins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(coins.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, coins]);

  // Invoke when user click to request another page.
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % coins.length;
    // console.log(
    //   `User requested page number ${e.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {currentItems
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="list-none flex justify-center items-center my-4 text-base gap-2"
        pageLinkClassName="p-1 cursor-pointer hover:text-accent"
        previousLinkClassName="p-1 cursor-pointer"
        nextLinkClassName="p-1 cursor-pointer"
        activeLinkClassName="text-accent"
      />
    </div>
  );
};

export default CoinSearch;
