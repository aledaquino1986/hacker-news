import React, { useContext } from "react";
import ThemeButton from "../../units/button/ThemeButton";
import { ThemeContext } from "../../../context/ThemeContext";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <div className="news-categories">
          <ul>
            <li>
              <NavLink exact to="/">
                Top
              </NavLink>
            </li>
            <li>
              <NavLink to="/new">New</NavLink>
            </li>
          </ul>
        </div>

        <div className="theme-toggler-container">
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
