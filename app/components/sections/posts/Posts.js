import React from "react";
import { Link } from "react-router-dom";
import { getTime } from "../../../utils/timeUtils";

import "./posts.css";

const Posts = ({ title, id, url, by, time, comments }) => {
  const timeOfPost = getTime(time);

  return (
    <div className="posts-container">
      <h4>
        {" "}
        <a href={url}> {title} </a>{" "}
      </h4>
      <p>
        by <Link to={`user?id=${by}`}>{by}</Link> on {timeOfPost} with{" "}
        <Link to={`post?id=${id}`}>{comments}</Link> comments
      </p>
    </div>
  );
};

export default Posts;
