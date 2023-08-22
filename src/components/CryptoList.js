import React from "react";

import CryptoCard from "./CryptoCard";

const CryptoList = ({ coinsData }) => {

    return(
        <table className="table table-striped table-hover">
            <thead className="table-light">
                <tr className="text-center fw-bold">
                    <td className="col-1"></td>
                    <td className="col-1" style={{textAlign: "left"}}>Coin</td>
                    <td className="col-2">Price</td>
                    <td className="col-2"><i className="bi bi-arrow-up" style={{color: "#1CCB49"}}></i>Highest price (24h)</td>
                    <td className="col-2"><i className="bi bi-arrow-down" style={{color: "red"}}></i>Lowest price (24h)</td>
                </tr>
            </thead>
            <tbody>
            {coinsData?.map((coin) => {
                return(
                    <CryptoCard
                        image={coin.image}
                        name={coin.name}
                        price={coin.current_price}
                        high_24h={coin.high_24h}
                        low_24h={coin.low_24h}
                    />
                );
            })}
            </tbody>
        </table>
    );
}

export default CryptoList