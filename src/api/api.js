import axios from 'axios';

const twitterApiTweetsUrl = '/twitterapi/1.1/search/tweets.json';

export const fetchTweets = async (searchTerms) => {
  const response = await axios({
    method: 'GET',
    params: {
      q: searchTerms,
      result_type: 'popular',
      count: 5,
    },
    url: twitterApiTweetsUrl,
  });
  return response.data;
};
