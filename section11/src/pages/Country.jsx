import style from "./Country.module.css";

import { useParams } from "react-router-dom";

import { fetchCountry } from "../api";
import { useEffect, useState } from "react";

export default function Country() {
  const params = useParams();

  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <img src={country.flagImg} alt={`${country.commonName}'s flag image`} />

      <div className={style.body}>
        <div>
          <b>code :</b>&nbsp;{country.code}
        </div>
        <div>
          <b>capital :</b>&nbsp;{country.capital.join(", ")}
        </div>
        <div>
          <b>region :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>map :</b>&nbsp;
          <a href={country.googleMapURL} target="_blank">
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}
