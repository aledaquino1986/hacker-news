import {
  hackerNewsBaseUrl,
  apiTopStoriesUrl,
  apiNewStoriesUrl
} from "./constants";

export const fetchNewsStories = (component, typeOfNews) => {
  const newsStories = [];

  const apiUrl = typeOfNews === "new" ? apiNewStoriesUrl : apiTopStoriesUrl;
  fetch(apiUrl)
    .then(response => response.json())
    .then(news => {
      createNewsStoriesUrl(newsStories, news);
      let newsStoriesData = fetchIndividualNewsStory(newsStories);

      destructureNewsUrl(newsStoriesData, component);
    })
    .catch(err => err);
};

export const fetchIndividualNewsStory = newsStoriesLink => {
  const newsStoriesUrl = newsStoriesLink;

  const limit30newsStoriesUrl = newsStoriesUrl.filter((story, index) => {
    return index <= 29;
  });

  const newsStoriesData = limit30newsStoriesUrl.map(
    (story, index) => story[index]
  );

  return newsStoriesData;
};

// export const destructureNewsUrl = (urls, component, typeOfNews) => {
//   Promise.all(
//     urls.map(url =>
//       fetch(url)
//         .then(response => response.json())
//         .then(data => data)
//         .catch(err => err)
//     )
//   ).then(data => {
//     const filteredOutNullData = data.filter(destructuredData => {
//       return destructuredData !== null;
//     });

//     let filterOutUserComments;

//     if (typeOfNews === "topOrNew") {
//       component.setState({
//         news: filterNullData,
//         isLoading: false
//       });
//     }

//     if (typeOfNews === "user") {
//       filterOutUserComments = filteredOutNullData.filter(data => {
//         return data.type !== "comment";
//       });

//       component.setState({
//         news:
//           typeOfNews === "user" ? filterOutUserComments : filteredOutNullData,
//         isLoading: false
//       });
//     }

//     if (typeOfNews === "comment") {
//       component.setState({
//         comments: filteredOutNullData,
//         isLoading: false
//       });
//     }
//   });
// };

export const destructureNewsUrl = (
  urls,
  component,
  typeOfNews = "topOrNew"
) => {
  Promise.all(
    urls.map(url =>
      fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
    )
  ).then(data => {
    const filterNullData = data.filter(destructuredData => {
      return destructuredData !== null;
    });

    let filterComments;

    if (typeOfNews === "comment") {
      component.setState({
        comments: filterNullData,
        isLoading: false
      });
    } else if (typeOfNews === "user" || typeOfNews === "topOrNew") {
      if (typeOfNews === "user") {
        filterComments = filterNullData.filter(data => {
          return data.type !== "comment";
        });
      }

      component.setState({
        news: typeOfNews === "user" ? filterComments : filterNullData,
        isLoading: false
      });
    }
  });
};

export const createNewsStoriesUrl = (containerArray, newsIDobject) => {
  for (let key in newsIDobject) {
    const individualNewspiUrl = `${hackerNewsBaseUrl}/item/${newsIDobject[key]}.json?print=pretty`;
    containerArray.push({ [key]: individualNewspiUrl });
  }
};
