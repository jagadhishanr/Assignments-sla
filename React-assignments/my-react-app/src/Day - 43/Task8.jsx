import React, { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "#ffffff" : "#121212",
        color: theme === "light" ? "#000000" : "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
