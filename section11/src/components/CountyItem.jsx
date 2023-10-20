import style from "./CountryItem.module.css";
import { useNavigate } from "react-router-dom";

export default function CountyItem({
  capital,
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
}) {
  const nav = useNavigate();
  const onClickItem = () => {
    nav(`/country/${code}`);
  };

  return (
    <div className={style.container} onClick={onClickItem}>
      <img src={flagImg} alt="" className={style.flag_img} />
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>region : {region}</div>
        <div>capital : {capital.join(", ")}</div>
        <div>population : {population}</div>
      </div>
    </div>
  );
}
