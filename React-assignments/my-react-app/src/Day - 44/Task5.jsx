import React from "react";

function DataList() {
  const items = []; // empty array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {items.length === 0 && (
        <p>No Data Available</p>
      )}

      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataList;
