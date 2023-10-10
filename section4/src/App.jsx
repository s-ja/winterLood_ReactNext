import { useEffect, useRef, useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useUpdate(() => {
    console.log("App component updated");
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  const onClickButton = (value) => {
    setCount(count + value);
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
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
