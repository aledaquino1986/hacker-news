import {
  individualPostBaseApiUrl,
  apiUrlEnd,
  hackerNewsBaseUrl
} from "./constants";

import { convertIdsToNewsUrls } from "./apiUtils";

export const getIndividualPost = (id, component) => {
  const individualPostApiUrl = `${individualPostBaseApiUrl}${id}${apiUrlEnd}`;

  fetch(individualPostApiUrl)
    .then(response => response.json())
    .then(data => {
      const listOfComments = convertIdsToNewsUrls(data.kids);

      let commentsUrlList = fetchComments(listOfComments);

      destructureComments(commentsUrlList, component);

      component.setState({
        commentsGeneralInfo: data
      });
    });
};

export const fetchComments = commentsUrlObject => {
  const commentsUrlList = commentsUrlObject.map((story, index) => story[index]);

  return commentsUrlList;
};

export const destructureComments = (urls, component) => {
  Promise.all(
    urls.map(url =>
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const commentsWithComments = obtainCommentsOfCOmmentsKids(data);
          return commentsWithComments;
        })
        .catch(err => err)
    )
  ).then(data => {
    const filterNullData = data.filter(destructuredData => {
      return destructuredData !== null;
    });

    component.setState({
      comments: filterNullData,
      isLoading: false
    });
  });
};

const obtainCommentsOfCOmmentsKids = data => {
  if (!data.kids) {
    return data;
  } else {
    const kids = [...data.kids];

    const urls = kids.map(ids => {
      return `${hackerNewsBaseUrl}/item/${ids}.json?print=pretty`;
    });

    const information = Promise.all(
      urls.map(url =>
        fetch(url)
          .then(response => response.json())
          .then(info => {
            const commentsWithComments = obtainCommentsOfCOmmentsKids(info);
            return commentsWithComments;
          })
          .catch(err => err)
      )
    ).then(info => {
      data.kids = info;

      return data;
    });

    return information;
  }
};
