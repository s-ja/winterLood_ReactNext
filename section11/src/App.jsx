import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Country from "./pages/Country";
import NotFound from "./pages/NotFount";

function App() {
  const nav = useNavigate();

  const onClick = () => {
    nav("/search");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/country"}>Country</Link>

        <button onClick={onClick}>Search</button>
      </div>
    </>
  );
}

export default App;
