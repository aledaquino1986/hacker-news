import React, { useContext } from "react";
import "./main.css";
import { ThemeContext } from "../../context/ThemeContext";

const BodyLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`body app-${theme}`}>{children}</div>;
};

export default BodyLayout;
