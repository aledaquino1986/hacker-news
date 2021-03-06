import React from "react";

import Navbar from "./components/sections/navbar/Navbar";
import ThemeContextProvider from "./context/ThemeContext";
import BodyLayout from "./components/layout/BodyLayout";
import User from "./components/pages/user/User";
import Page404 from "./components/pages/404/Page404";
import Comments from "./components/pages/comments/Comments";
import NewsStories from "./components/pages/newsStories/NewsStories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const paths = [
    { path: "/", typeOfNewsStory: "top" },
    { path: "/new", typeOfNewsStory: "new" }
  ];
  return (
    <Router>
      <ThemeContextProvider>
        <BodyLayout>
          <Navbar />

          <Switch>
            {paths.map(data => {
              const { path, typeOfNewsStory } = data;
              return (
                <Route
                  key={typeOfNewsStory}
                  exact
                  path={path}
                  render={() => (
                    <NewsStories typeOfNewsStory={typeOfNewsStory} />
                  )}
                />
              );
            })}
            <Route path="/user" component={User} />
            <Route path="/post" component={Comments} />
            <Route render={() => <Page404 />} />
          </Switch>
        </BodyLayout>
      </ThemeContextProvider>
    </Router>
  );
};

export default App;
