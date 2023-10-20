import { useEffect, useState } from "react";
import { fetchCountries } from "../api";

import style from "./Home.module.css";

import CountyList from "../components/CountryList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className={style.container}>
      <SearchBar />
      <CountyList countries={countries} />
    </div>
  );
}
