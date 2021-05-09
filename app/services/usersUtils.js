import { userApiDataBaseUrl, apiUrlEnd } from "./constants";
import {
  fetch30NewsStoriesUrls,
  convertIdsToNewsUrls,
  destructureNewsUrl
} from "./apiUtils";

export const getUserJsonData = (id, component) => {
  const apiUrl = `${userApiDataBaseUrl}${id}${apiUrlEnd}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const urlArray = [];

      convertIdsToNewsUrls(urlArray, data.submitted);
      let newsStoriesData = fetch30NewsStoriesUrls(urlArray);
      destructureNewsUrl(newsStoriesData, component, "user");
      component.setState({
        user: data
      });
    });
};
