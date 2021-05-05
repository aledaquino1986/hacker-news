import React from "react";

import Navbar from "./components/sections/navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import BodyLayout from "./components/layout/BodyLayout";
import User from "./components/pages/user/User";
import Comments from "./components/pages/comments/Comments";
import NewsStories from "./components/pages/newsStories/NewsStories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ThemeContextProvider>
        <BodyLayout>
          <Navbar />
          <Route
            exact
            path="/"
            render={() => {
              return <NewsStories typeOfNewsStory="top" />;
            }}
          />
          <Route
            exact
            path="/new"
            render={() => {
              return <NewsStories typeOfNewsStory="new" />;
            }}
          />
          <Route path="/user" component={User} />
          <Route path="/post" component={Comments} />
        </BodyLayout>
      </ThemeContextProvider>
    </Router>
  );
};

export default App;
