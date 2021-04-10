import { TWEETS_FETCHED } from '../actionTypes/actionTypes';

const initialState = {
  tweets: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEETS_FETCHED:
      return {
        ...state,
        tweets: action.tweets,
      };
    default:
      return { ...state };
  }
};
