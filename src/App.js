import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import CoinPage from "./routes/CoinPage";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([]);

  // Pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";

  useEffect(() => {
    // Fetching the coins without pagination
    // axios.get(url).then((response) => {
    //   setCoins(response.data);
    //   console.log(response.data);
    // });

    // Fetching the coins with pagination
    const fetchCoins = async () => {
      setLoading(true);
      const response = await axios.get(url);
      setCoins(response.data);
      // console.log(response.data);
      setLoading(false);
    };
    fetchCoins();
  }, [url]);

  // Get Current Coin
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoin = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // console.log(pageNumber);
  };

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              coins={currentCoin}
              loading={loading}
              coinsPerPage={coinsPerPage}
              totalCoins={coins.length}
              paginate={paginate}
            />
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
