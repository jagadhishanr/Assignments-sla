import React, { useState } from "react";

function NotificationBadge() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setCount(count + 1)}>
        Add Notification
      </button>

      {count > 0 && (
        <span
          style={{
            marginLeft: "10px",
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "50%",
            fontSize: "14px",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}

export default NotificationBadge;
