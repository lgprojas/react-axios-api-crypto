import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

function App() {

  let page
  localStorage.getItem('pagina') ? page = localStorage.getItem('pagina') : page = 1
  
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [postsPerPage] = useState(8);
  const [loading, setLoading] = useState(true)

  useEffect( () => {

    
    const getCoins = async () => {

      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        setCoinsData(response.data);
      } catch (error) {
        setLoading(false)
      } finally {
        setLoading(true);
      }
    }
    
    getCoins()
    
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => {

    localStorage.setItem('pagina', pageNumber)
    if(localStorage.getItem('pagina')){
      const page = localStorage.getItem('pagina')
      setCurrentPage(page)
    }else{
      localStorage.setItem('pagina', pageNumber)
      const page = localStorage.getItem('pagina')
      setCurrentPage(page)
    }

  };

  return (
    (loading) ?
    <div className="container">
      <div className="col-12 row">
        <div className="col-8 text-end h2">Crypto Gallery</div>
        <div className="col-4 text-end align-bottom">*Cifras en USD</div>
      </div>
      <div className="table-responsive">
        <CryptoList coinsData={currentPosts} />
      </div>
      <div className="d-flex justify-content-center">
        <Pagination postsPerPage={postsPerPage} totalPosts={coinsData.length} paginate={paginate} active={page} />
      </div>
    </div>
    : <div className="text-center"><i class="bi bi-emoji-dizzy"></i> Hemos excedido el límite permitido para consultar la API</div>
  );
}

export default App;
