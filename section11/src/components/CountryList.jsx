import CountyItem from "./CountyItem";
import style from "./CountyList.module.css";

export default function CountyList({ countries }) {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountyItem key={country.code} {...country} />
      ))}
    </div>
  );
}

CountyList.defaultProps = {
  countries: [],
};
