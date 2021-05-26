import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./loader.css";

const Loader = ({ fetchingText = "Loading" }) => {
  const [content, setContent] = useState(fetchingText);

  useEffect(() => {
    let interval = setInterval(() => {
      content === fetchingText + "..."
        ? setContent(fetchingText)
        : setContent(content + ".");
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [content]);

  return <h2 className="loader">{content}</h2>;
};

Loader.propTypes = {
  fetchingText: PropTypes.string
};

export default Loader;
