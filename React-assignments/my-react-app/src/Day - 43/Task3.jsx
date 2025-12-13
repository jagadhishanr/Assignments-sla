import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;
