import React from "react";
import "./button.css";

const ThemeButton = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-button"
      style={{ fontSize: "2.5rem" }}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🔦" : "💡"}
    </button>
  );
};

export default ThemeButton;
