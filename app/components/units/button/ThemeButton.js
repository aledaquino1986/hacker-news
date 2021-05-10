import React from "react";
import "./button.css";

import PropTypes from "prop-types";

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

ThemeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
};
