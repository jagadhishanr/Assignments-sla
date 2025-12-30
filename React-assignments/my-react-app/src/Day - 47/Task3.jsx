import { useState, useEffect } from "react";

function CounterWithEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // runs only when count changes

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default CounterWithEffect;
