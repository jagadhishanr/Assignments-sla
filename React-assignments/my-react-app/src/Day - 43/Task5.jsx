import React, { useState } from "react";

function BackgroundColorChanger() {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    setColor(color === "white" ? "lightblue" : "white");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={changeColor}>
        Change Background Color
      </button>
    </div>
  );
}

export default BackgroundColorChanger;
