import React, { Component } from "react";
import queryString from "query-string";
import Loader from "../../sections/loader/Loader";
import UserDetailsSubheading from "../../units/UserDetailsSubheading";
import { Link } from "react-router-dom";
import { getTime } from "../../../utils/timeUtils";

import { getIndividualPost } from "../../../services/commentsUtils";
import "./comments.css";

class Comments extends Component {
  state = {
    comments: [],
    commentsGeneralInfo: {},
    isLoading: true
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    getIndividualPost(id, this);
  }
  render() {
    const {
      by,
      descendants,
      time,
      id,
      title,
      url
    } = this.state.commentsGeneralInfo;
    const timeOfPost = getTime(time);
    {
      return this.state.isLoading ? (
        <Loader fetchingText="Loading" />
      ) : (
        <section className="comment-section">
          <div className="posts-container">
            <h2>
              <a href={url}> {title}</a>
            </h2>
            <UserDetailsSubheading
              by={by}
              comments={descendants}
              timeOfPost={timeOfPost}
              id={id}
            />
          </div>

          {this.state.comments.map(comments => {
            return (
              <div className="comments-container" key={comments.id}>
                <UserDetailsSubheading
                  by={comments.by}
                  timeOfPost={getTime(comments.time)}
                  id={comments.id}
                />
                <div dangerouslySetInnerHTML={{ __html: comments.text }}></div>
              </div>
            );
          })}
        </section>
      );
    }
    // return (
    //   <div>
    //     <h2>Comments</h2>
    //   </div>
    // );
  }
}

export default Comments;
