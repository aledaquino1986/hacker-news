import React from "react";
import "./main.css";
import { ThemeContext } from "../../context/ThemeContext";

const BodyLayout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const { theme } = context;
        return <div className={`body app-${theme}`}>{children}</div>;
      }}
    </ThemeContext.Consumer>
  );
};

export default BodyLayout;
