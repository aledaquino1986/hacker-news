import React, { Component } from "react";
import queryString from "query-string";

import { getUserJsonData } from "../../../services/usersUtils";

class User extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    getUserJsonData(id, this);
  }

  render() {
    return (
      <div className="user-container">
        <h2>User</h2>
        <p>Joined Date has 0 karma</p>

        <h3>Posts</h3>
      </div>
    );
  }
}

export default User;
