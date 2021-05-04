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
      for (let key in news) {
        const individualNewspiUrl = `${hackerNewsBaseUrl}/item/${news[key]}.json?print=pretty`;
        newsStories.push({ [key]: individualNewspiUrl });
      }

      let newsStoriesData = fetchIndividualNewsStory(newsStories, component);

      destructureNewsUrl(newsStoriesData, component);
    })
    .catch(err => err);
};

export const fetchIndividualNewsStory = (newsStoriesLink, component) => {
  const newsStoriesUrl = newsStoriesLink;

  const limit30newsStoriesUrl = newsStoriesUrl.filter((story, index) => {
    return index <= 29;
  });

  const newsStoriesData = limit30newsStoriesUrl.map(
    (story, index) => story[index]
  );

  return newsStoriesData;
};

export const destructureNewsUrl = (urls, component) => {
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
    component.setState({
      news: filterNullData,
      isLoading: false
    });
  });
};
