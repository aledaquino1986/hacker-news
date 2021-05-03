import { individualPostBaseApiUrl, apiUrlEnd } from "./constants";

export const getIndividualPost = (id, component) => {
  const individualPostApiUrl = `${individualPostBaseApiUrl}${id}${apiUrlEnd}`;

  fetch(individualPostApiUrl)
    .then(response => response.json())
    .then(data => {
      component.setState({
        user: data
      });
    });
  console.log(individualPostApiUrl);
};
