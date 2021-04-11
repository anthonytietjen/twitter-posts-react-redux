import { TWEETS_FETCHED } from '../actionTypes/actionTypes';

export const tweetsFetched = (searchTerms, tweets, nextResultId) => ({
  type: TWEETS_FETCHED,
  searchTerms,
  tweets,
  nextResultId,
});
