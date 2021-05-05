import React, { Component } from "react";
import Loader from "../../../components/sections/loader/Loader";
import Posts from "../../sections/posts/Posts";
import { fetchNewsStories } from "../../../services/apiUtils";

import "./newsStories.css";

class NewsStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetchNewsStories(this, this.props.typeOfNewsStory);
  }

  render() {
    {
      return this.state.isLoading ? (
        <Loader />
      ) : (
        <section className="posts-section">
          {this.state.news.map(newsStory => {
            const { title, id, url, by, time, descendants } = newsStory;

            return (
              <Posts
                key={id}
                title={title}
                id={id}
                url={url}
                by={by}
                time={time}
                comments={descendants}
              />
            );
          })}
        </section>
      );
    }
  }
}

export default NewsStories;
