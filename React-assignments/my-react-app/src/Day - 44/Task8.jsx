import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ];

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>User List</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
