import React, { useState } from "react";

function EvenOddChecker() {
  const [number, setNumber] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      {number !== "" && (
        <h3>
          {number % 2 === 0 ? "Even" : "Odd"}
        </h3>
      )}
    </div>
  );
}

export default EvenOddChecker;
