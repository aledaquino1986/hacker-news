import React, { Component } from "react";
import {
  fetchTopStories,
  destructureNewsUrl
} from "../../../services/apiUtils";

const hackerNewsBaseUrl = "https://hacker-news.firebaseio.com/v0/";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetchTopStories(this);
  }

  render() {
    return (
      <h2>
        These are the top news
        <button onClick={() => console.log(this.state.news)}>Click</button>
      </h2>
    );
  }
}

export default Top;
