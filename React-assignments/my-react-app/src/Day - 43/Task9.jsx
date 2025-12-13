import React, { useState } from "react";

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select an option</h2>

      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">-- Choose --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>

      {selectedOption && (
        <p style={{ marginTop: "15px" }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
}

export default DropdownMenu;
