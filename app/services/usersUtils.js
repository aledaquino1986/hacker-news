import { userApiDataBaseUrl, apiUrlEnd } from "./constants";
import {
  fetchIndividualNewsStory,
  createNewsStoriesUrl,
  destructureNewsUrl
} from "./apiUtils";

export const getUserJsonData = (id, component) => {
  const apiUrl = `${userApiDataBaseUrl}${id}${apiUrlEnd}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const urlArray = [];

      createNewsStoriesUrl(urlArray, data.submitted);
      let newsStoriesData = fetchIndividualNewsStory(urlArray);
      destructureNewsUrl(newsStoriesData, component, "user");
      component.setState({
        user: data
      });
    });
};
