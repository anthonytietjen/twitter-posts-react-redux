import {
  FILTER_APPLIED,
  TWEETS_FETCHED,
} from '../actionTypes/actionTypes';

const initialState = {
  searchTerms: '',
  tweets: [],
  nextResultId: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEETS_FETCHED:
      return {
        ...state,
        searchTerms: action.searchTerms,
        tweets: action.tweets,
        nextResultId: action.nextResultId,
      };
    case FILTER_APPLIED:
      return {
        ...state,
        tweets: action.tweets,
      };
    default:
      return { ...state };
  }
};
