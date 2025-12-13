import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" },
    { id: 3, text: "Practice JavaScript" },
  ]);

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
