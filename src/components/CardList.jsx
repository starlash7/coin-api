import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardList = () => {
  const [coin, setCoin] = useState([]);

  const getCoins = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      {
        headers: {
          Accept: "application/json",
          "x-cg-demo-api-key": "CG-XD7fi8u8dQTsqPB4WaRo9bzF",
        },
      }
    );

    console.log(response.data);

    setCoin(response.data);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
      {coin.map((v, i) => (
        <Card
          key={i}
          name={v.name}
          image={v.image}
          currentPrice={v.current_price}
          ath={v.ath}
          athChangePercentage={v.ath_change_percentage}
          marketCapRank={v.market_cap_rank}
        />
      ))}
    </ul>
  );
};

export default CardList;
