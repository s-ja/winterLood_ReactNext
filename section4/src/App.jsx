import { useEffect, useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    // console.log(`count : ${count}, text : ${text}`);
    console.log(`count : ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`text : ${text}`);
  }, [text]);

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(`text : ${text}`);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>simple counter</h1>
      <section>
        <input type="text" value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
