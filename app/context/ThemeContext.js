import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "light"
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  };

  componentDidMount() {
    this.setState({
      theme: localStorage.getItem("darkLightMode") || "light"
    });
  }

  componentDidUpdate() {
    localStorage.setItem("darkLightMode", this.state.theme);
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
