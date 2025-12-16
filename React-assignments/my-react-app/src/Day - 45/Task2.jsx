import { useState } from "react";

function UppercaseInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type here"
      />
      <p>{value}</p>
    </div>
  );
}

export default UppercaseInput;
