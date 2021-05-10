import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserDetailsSubheading = ({ by, timeOfPost, id, comments }) => {
  {
    return comments === undefined ? (
      <p className="user-details-subheading">
        by <Link to={`user?id=${by}`}>{by}</Link> on {timeOfPost}
      </p>
    ) : (
      <p className="user-details-subheading" style={{ color: "gray" }}>
        by <Link to={`user?id=${by}`}>{by}</Link> on {timeOfPost} with{" "}
        <Link to={`post?id=${id}`}>{comments}</Link> comments
      </p>
    );
  }
};

export default UserDetailsSubheading;
