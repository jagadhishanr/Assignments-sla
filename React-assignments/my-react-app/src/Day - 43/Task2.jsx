import React, { useState } from "react";

function TextDisplay() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed:</p>
      <h3>{text}</h3>
    </div>
  );
}

export default TextDisplay;
