import { individualPostBaseApiUrl, apiUrlEnd } from "./constants";

import {
  fetchIndividualNewsStory,
  createNewsStoriesUrl,
  destructureNewsUrl
} from "./apiUtils";

export const getIndividualPost = (id, component) => {
  const individualPostApiUrl = `${individualPostBaseApiUrl}${id}${apiUrlEnd}`;

  fetch(individualPostApiUrl)
    .then(response => response.json())
    .then(data => {
      const urlArray = [];

      createNewsStoriesUrl(urlArray, data.kids);

      let newsStoriesData = fetchIndividualNewsStory(urlArray);

      destructureNewsUrl(newsStoriesData, component, "comment");

      component.setState({
        commentsGeneralInfo: data
      });
    });
};
