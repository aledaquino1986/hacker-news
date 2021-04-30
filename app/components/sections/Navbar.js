import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { theme, toggleTheme } = context;
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
                  <button onClick={context.toggleTheme}>🔦</button>
                </div>
              </nav>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
