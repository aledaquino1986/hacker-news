import React, { Component } from "react";
import queryString from "query-string";
import Loader from "../../sections/loader/Loader";
import UserDetailsSubheading from "../../units/UserDetailsSubheading";

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

  renderComment = comments => {
    const renderedComments = comments.map((comments, index) => {
      if (comments.deleted === true || comments.dead === true) {
        return (
          <div className="comments-container" key={Math.random()}>
            <p className="deleted-comment">Deleted comment</p>
          </div>
        );
      } else if (comments.id === undefined) {
        return null;
      } else {
        return comments.kids ? (
          <div className="comments-container" key={Math.random()}>
            <UserDetailsSubheading
              by={comments.by}
              timeOfPost={getTime(comments.time)}
              id={comments.id}
            />
            <div dangerouslySetInnerHTML={{ __html: comments.text }}></div>

            {comments.kids && this.renderComment(comments.kids)}
          </div>
        ) : (
          <div className="comments-container" key={Math.random()}>
            <UserDetailsSubheading
              by={comments.by}
              timeOfPost={getTime(comments.time)}
              id={comments.id}
            />
            <div dangerouslySetInnerHTML={{ __html: comments.text }}></div>
          </div>
        );
      }
    });

    return renderedComments;
  };
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

          {this.renderComment(this.state.comments)}
        </section>
      );
    }
  }
}

export default Comments;
