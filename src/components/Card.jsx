const Card = ({
  name,
  image,
  currentPrice,
  ath,
  athChangePercentage,
  marketCapRank,
}) => {
  return (
    <li cclassName="bg-blue-100 w-44 h-72">
      <div className="flex justify-center font-bold">{name}</div>
      <div className="bg-green-100 flex justify-center py-7">
        <img className="w-20 h-20" src={image} alt={name} />
      </div>
      <div className="flex justify-center">현재가:{currentPrice}원</div>
      <div className="flex justify-center">
        최고가: {ath}원({athChangePercentage})
      </div>
      <div className="flex justify-center">시가총액순위: {marketCapRank}</div>
    </li>
  );
};

export default Card;
