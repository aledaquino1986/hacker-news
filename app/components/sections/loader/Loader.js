import React, { Component } from "react";
import "./loader.css";

class Loader extends Component {
  state = {
    content: this.props.fetchingText
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.content === this.props.fetchingText + "...") {
        this.setState({
          content: this.props.fetchingText
        });
      } else {
        this.setState(previousState => {
          return {
            content: previousState.content + "."
          };
        });
      }
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h2 className="loader">{this.state.content}</h2>;
  }
}

export default Loader;
