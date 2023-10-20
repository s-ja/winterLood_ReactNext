import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    if (search !== "") {
      nav(`/search?q=${search}`);
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };
  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Please enter a search keyword"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClickSearch}>search</button>
    </div>
  );
}
