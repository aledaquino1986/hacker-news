import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./button.css";

import PropTypes from "prop-types";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
};
