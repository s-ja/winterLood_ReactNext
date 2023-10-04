import "./Body.css";
import { useState } from "react";

export default function Body() {
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="body">
      <input type="text" value={name} onChange={onChangeName} />
    </div>
  );
}
