import React from "react";
import { Link } from "react-router-dom";

const UserDetailsSubheading = ({ by, timeOfPost, id, comments }) => {
  {
    return !comments ? (
      <p>
        by <Link to={`user?id=${by}`}>{by}</Link> on {timeOfPost}
      </p>
    ) : (
      <p>
        by <Link to={`user?id=${by}`}>{by}</Link> on {timeOfPost} with{" "}
        <Link to={`post?id=${id}`}>{comments}</Link> comments
      </p>
    );
  }
};

export default UserDetailsSubheading;
