const hackerNewsBaseUrl = "https://hacker-news.firebaseio.com/v0/";

export const fetchTopStories = component => {
  const apiTopStoriesUrl = `${hackerNewsBaseUrl}topstories.json?print=pretty`;
  const topStories = [];
  fetch(apiTopStoriesUrl)
    .then(response => response.json())
    .then(news => {
      for (let key in news) {
        const individualNewspiUrl = `${hackerNewsBaseUrl}/item/${news[key]}.json?print=pretty`;
        topStories.push({ [key]: individualNewspiUrl });
      }

      let topStoriesData = fetchIndividualNewsStory(topStories, component);
      destructureNewsUrl(topStoriesData, component);
    })
    .catch(err => err);
};

export const fetchIndividualNewsStory = (topStoriesLink, component) => {
  const topStoriesUrl = topStoriesLink;

  const limit30topStoriesUrl = topStoriesUrl.filter((story, index) => {
    return index <= 29;
  });

  const topStoriesData = limit30topStoriesUrl.map(
    (story, index) => story[index]
  );

  return topStoriesData;
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
    component.setState({
      news: data
    });
  });
};
