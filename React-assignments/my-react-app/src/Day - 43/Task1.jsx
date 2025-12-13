import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase} style={{ marginLeft: "10px" }}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
