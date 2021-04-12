import queryString from 'query-string';
import { TWEETS_FETCHED, FILTER_APPLIED } from '../actionTypes/actionTypes';

export const tweetsFetched = (searchTerms, tweets, searchMetaData) => {
  const nextResultId = (searchMetaData && searchMetaData.next_results)
    ? queryString.parse(searchMetaData.next_results).max_id
    : '';

  return {
    type: TWEETS_FETCHED,
    searchTerms,
    tweets,
    tweetsFiltered: tweets,
    nextResultId,
  };
};

export const filterApplied = (tweets, hashTag) => {
  const tweetsFiltered = tweets
    .filter(tweet => tweet.entities.hashtags
      .filter(tag => tag.text === hashTag).length > 0);

  return ({
    type: FILTER_APPLIED,
    tweets: tweetsFiltered,
  });
};
