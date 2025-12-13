import React from "react";

function CityList() {
  const cities = [
    { id: 1, name: "New York" },
    { id: 2, name: "London" },
    { id: 3, name: "Paris" },
    { id: 4, name: "Tokyo" },
    { id: 5, name: "Sydney" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>City List</h2>

      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
``
