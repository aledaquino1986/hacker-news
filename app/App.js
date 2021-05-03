import React from "react";
import Top from "./components/pages/top/Top";
import New from "./components/pages/new/New";
import Navbar from "./components/sections/navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import BodyLayout from "./components/layout/BodyLayout";
import User from "./components/pages/user/User";
import Comments from "./components/pages/comments/Comments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ThemeContextProvider>
        <BodyLayout>
          <Navbar />

          <Route exact path="/" component={Top} />
          <Route exact path="/new" component={New} />
          <Route path="/user" component={User} />
          <Route path="/post" component={Comments} />
        </BodyLayout>
      </ThemeContextProvider>
    </Router>
  );
};

export default App;
