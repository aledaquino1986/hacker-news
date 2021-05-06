import React from "react";
import { Link } from "react-router-dom";
import { getTime } from "../../../utils/timeUtils";
import UserDetailsSubheading from "../../units/UserDetailsSubheading";

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
