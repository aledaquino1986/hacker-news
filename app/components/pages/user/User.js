import React, { Component } from "react";
import queryString from "query-string";
import { getTime } from "../../../utils/timeUtils";
import Loader from "../../sections/loader/Loader";
import Posts from "../../sections/posts/Posts";

import { getUserJsonData } from "../../../services/usersUtils";
import "./user.css";
class User extends Component {
  state = {
    user: {},
    news: [],
    isLoading: true
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    getUserJsonData(id, this);
  }

  render() {
    const { about, created, id, karma } = this.state.user;
    {
      return this.state.isLoading ? (
        <Loader fetchingText="Fetching user" />
      ) : (
        <section className="posts-section">
          <div className="user-container">
            <h2>{id}</h2>
            <p>
              Joined <span className="user-details">{getTime(created)}</span>.
              Has <span className="user-details">{karma}</span> karma
            </p>

            <div dangerouslySetInnerHTML={{ __html: about }}></div>

            <h3>Posts</h3>

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
          </div>
        </section>
      );
    }
  }
}

export default User;
