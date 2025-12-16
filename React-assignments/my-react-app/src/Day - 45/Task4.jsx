import { useState } from "react";

function CountryDropdown() {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <select value={country} onChange={handleChange}>
        <option value="">Select a country</option>
        <option value="USA">United States</option>
        <option value="India">India</option>
        <option value="UK">United Kingdom</option>
        <option value="Canada">Canada</option>
      </select>

      {country && <p>Selected Country: {country}</p>}
    </div>
  );
}

export default CountryDropdown;
