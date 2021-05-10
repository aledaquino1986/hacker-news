import React, { Component } from "react";
import Loader from "../../../components/sections/loader/Loader";
import Posts from "../../sections/posts/Posts";
import ErrorHandler from "../../sections/errorHandler/ErrorHandler";
import { fetchNewsStories } from "../../../services/apiUtils";
import PropTypes from "prop-types";

import "./newsStories.css";

class NewsStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: true,
      err: false
    };
  }

  componentDidMount() {
    fetchNewsStories(this, this.props.typeOfNewsStory);
  }

  render() {
    {
      return this.state.err ? (
        <ErrorHandler />
      ) : this.state.isLoading ? (
        <Loader fetchingText="Loading" />
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

NewsStories.propTypes = {
  typeOfNewsStory: PropTypes.string.isRequired
};
