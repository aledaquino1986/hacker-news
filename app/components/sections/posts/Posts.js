import React from "react";

import { getTime } from "../../../utils/timeUtils";
import UserDetailsSubheading from "../../units/UserDetailsSubheading";
import PropTypes from "prop-types";

import "./posts.css";

const Posts = ({ title, id, url, by, time, comments }) => {
  const timeOfPost = getTime(time);

  return (
    <div className="posts-container">
      <h4>
        {" "}
        <a href={url}> {title} </a>{" "}
      </h4>

      <UserDetailsSubheading
        by={by}
        comments={comments}
        timeOfPost={timeOfPost}
        id={id}
      />
    </div>
  );
};

export default Posts;

Posts.propTypes = {
  by: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  id: PropTypes.number.isRequired,
  comments: PropTypes.number,
  time: PropTypes.number.isRequired
};
