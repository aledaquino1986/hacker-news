import React from "react";
import Top from "./components/pages/top/Top";
import New from "./components/pages/new/New";
import Navbar from "./components/sections/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import BodyLayout from "./components/layout/BodyLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ThemeContextProvider>
        <BodyLayout>
          <Navbar />

          <Route exact path="/" component={Top} />
          <Route exact path="/new" component={New} />
        </BodyLayout>
      </ThemeContextProvider>
    </Router>
  );
};

export default App;
