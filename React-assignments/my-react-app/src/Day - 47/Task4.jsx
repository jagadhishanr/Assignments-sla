import { useState, useEffect } from "react";

function NameLogger() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      console.log("Name changed:", name);
    }
  }, [name]); // runs whenever name changes

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default NameLogger;
