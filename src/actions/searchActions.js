import { TWEETS_FETCHED } from '../actionTypes/actionTypes';

export const tweetsFetched = (tweets) => ({
  type: TWEETS_FETCHED,
  tweets,
});
