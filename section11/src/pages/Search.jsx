import style from "./Search.module.css";

import { useSearchParams } from "react-router-dom";

import { fetchSearchResults } from "../api";
import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={style.container}>
      <SearchBar q={q} />
      <div>
        <b>{q}</b> search result
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
