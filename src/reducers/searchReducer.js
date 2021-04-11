import { TWEETS_FETCHED } from '../actionTypes/actionTypes';

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
    default:
      return { ...state };
  }
};
