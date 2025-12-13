import React, { useState } from "react";

function PremiumFeature() {
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>User Type</h2>

      {isPremiumUser && (
        <button>
          Access Premium Feature
        </button>
      )}

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setIsPremiumUser(!isPremiumUser)}>
          Toggle Premium User
        </button>
      </div>
    </div>
  );
}

export default PremiumFeature;
