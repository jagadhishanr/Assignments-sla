import React, { useState } from "react";

function UserStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>
        {isLoggedIn ? "Logged In" : "Guest"}
      </h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Status
      </button>
    </div>
  );
}

export default UserStatus;
