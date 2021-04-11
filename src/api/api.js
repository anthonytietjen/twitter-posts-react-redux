import axios from 'axios';

const twitterApiTweetsUrl = '/twitterapi/1.1/search/tweets.json';

export const fetchTweetsBySearchTerms = async (searchTerms) => {
  // If empty sarchTerms, return empty results
  if (!searchTerms) {
    return {
      statuses: [],
      search_metadata: undefined,
    };
  }

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

export const fetchTweetsByMoreUrl = async (searchTerms, nextResultId) => {
  const response = await axios({
    method: 'GET',
    params: {
      q: searchTerms,
      max_id: nextResultId,
      result_type: 'popular',
      count: 5,
    },
    url: twitterApiTweetsUrl,
  });
  return response.data;
};
