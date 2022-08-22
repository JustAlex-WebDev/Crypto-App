import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";
import Skeleton from "../components/Skeleton";

const Home = ({ coins, loading }) => {
  return (
    <div>
      {loading ? <Skeleton /> : <CoinSearch coins={coins} />}
      {/* <CoinSearch coins={coins} /> */}
      <Trending />
    </div>
  );
};

export default Home;
