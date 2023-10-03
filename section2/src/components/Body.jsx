import "./Body.css";
import { useState } from "react";

export default function Body() {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div className="body">
      {light}
      <button
        onClick={() => {
          setLight("ON");
        }}
      >
        turn on light
      </button>
    </div>
  );
}
