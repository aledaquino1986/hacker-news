import { userApiDataBaseUrl, apiUrlEnd } from "./constants";

export const getUserJsonData = (id, component) => {
  const apiUrl = `${userApiDataBaseUrl}${id}${apiUrlEnd}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      component.setState({
        user: data
      });
    });
};
