import "./Body.css";
import { useState } from "react";

function Lightbulb({ light }) {
  return (
    <>
      {light === "ON" ? (
        <div style={{ backgroundColor: "orange" }}>ON</div>
      ) : (
        <div style={{ backgroundColor: "darkorange" }}>OFF</div>
      )}
    </>
  );
}

function StaticLightbulb() {
  console.log("static");
  return <div style={{ backgroundColor: "darkorange" }}>OFF</div>;
}

export default function Body() {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div className="body">
      <Lightbulb light={light} />
      <StaticLightbulb />
      <button
        onClick={() => {
          setLight("ON");
        }}
      >
        turn on light
      </button>
      <button
        onClick={() => {
          setLight("OFF");
        }}
      >
        turn off light
      </button>
    </div>
  );
}
