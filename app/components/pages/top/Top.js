import React, { Component } from "react";
import Loader from "../../../components/sections/loader/Loader";
import {
  fetchTopStories,
  destructureNewsUrl
} from "../../../services/apiUtils";

const hackerNewsBaseUrl = "https://hacker-news.firebaseio.com/v0/";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetchTopStories(this);
  }

  render() {
    {
      return this.state.isLoading ? (
        <Loader />
      ) : (
        <div>
          {this.state.news.map(newsStory => {
            const { title, id, url } = newsStory;

            return (
              <h2 key={id}>
                <a href={url}> {title}</a>
              </h2>
            );
          })}
        </div>
      );
    }
  }
}

export default Top;
