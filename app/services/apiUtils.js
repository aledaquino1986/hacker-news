import {
  hackerNewsBaseUrl,
  apiTopStoriesUrl,
  apiNewStoriesUrl
} from "./constants";

export const fetchNewsStories = (component, typeOfNews) => {
  const apiUrl = typeOfNews === "new" ? apiNewStoriesUrl : apiTopStoriesUrl;
  fetch(apiUrl)
    .then(response => response.json())
    .then(newsId => {
      const newsStoriesUrls = convertIdsToNewsUrls(newsId);

      let newsStoriesList_30Items = fetch30NewsStoriesUrls(newsStoriesUrls);

      destructureNewsUrl(newsStoriesList_30Items, component);
    })
    .catch(err => err);
};

export const fetch30NewsStoriesUrls = newsStoriesLink => {
  const limit30newsStoriesUrl = newsStoriesLink.filter((story, index) => {
    return index <= 29;
  });

  const newsStoriesData = limit30newsStoriesUrl.map(
    (story, index) => story[index]
  );

  return newsStoriesData;
};

export const destructureNewsUrl = (
  urls,
  component,
  typeOfNews = "topOrNew"
) => {
  Promise.all(
    urls.map(url =>
      fetch(url)
        .then(response => response.json())
        .then(data => {
          return data;
        })
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

export const convertIdsToNewsUrls = newsIDobject => {
  const containerArray = [];
  for (let key in newsIDobject) {
    const individualNewspiUrl = `${hackerNewsBaseUrl}/item/${newsIDobject[key]}.json?print=pretty`;
    containerArray.push({ [key]: individualNewspiUrl });
  }
  return containerArray;
};
