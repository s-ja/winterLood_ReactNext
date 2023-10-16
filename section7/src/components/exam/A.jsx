import { useState } from "react";

export default function A() {
  const [count, setCount] = useState(0);

  const onDecrease = () => {
    setCount(count - 1);
  };
  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>{count}</h4>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}
