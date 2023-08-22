import React from "react";
import { CurrencyFormatter } from "../helpers/CurrencyFormatter";

const CryptoCard = ({image, name, price, high_24h, low_24h}) => {
    return(
    <tr className="text-center" key={name}>
        <td className="col-1" style={{textAlign: "right"}}><img src={image} alt={name} style={{width: "20px", height: "auto"}}/></td>
        <td className="col-1" style={{textAlign: "left"}}>{name}</td>
        <td className="col-2">{CurrencyFormatter(price, 'USD')}</td>
        <td className="col-2">{CurrencyFormatter(high_24h, 'USD')}</td>
        <td className="col-2">{CurrencyFormatter(low_24h, 'USD')}</td>
    </tr>      
    );
}

export default CryptoCard