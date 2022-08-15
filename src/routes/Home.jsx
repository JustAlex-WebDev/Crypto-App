import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

const Home = ({ coins, loading, coinsPerPage, totalCoins, paginate }) => {
  return (
    <div>
      <CoinSearch
        coins={coins}
        loading={loading}
        coinsPerPage={coinsPerPage}
        totalCoins={totalCoins}
        paginate={paginate}
      />
      <Trending />
    </div>
  );
};

export default Home;
