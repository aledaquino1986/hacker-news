import React, { Component } from "react";
import queryString from "query-string";

import { getIndividualPost } from "../../../services/commentsUtils";

class Comments extends Component {
  state = {
    comments: {}
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    console.log(id);

    getIndividualPost(id, this);
  }
  render() {
    return (
      <div>
        <h2>Comments</h2>
      </div>
    );
  }
}

export default Comments;
