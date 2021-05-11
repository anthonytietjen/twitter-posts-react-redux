import axios from 'axios';

const twitterApiTweetsUrl = '/api/';

export const fetchTweets = async (searchTerms, nextResultId) => {
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
      max_id: nextResultId,
      result_type: 'popular',
      count: 5,
    },
    url: twitterApiTweetsUrl,
  });
  return response.data;
};
