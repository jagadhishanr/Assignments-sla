import React from "react";

function CityList() {
  const cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>City List</h2>

      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
