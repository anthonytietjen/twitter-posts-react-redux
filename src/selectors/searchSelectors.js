export const tweetsSelector = (state) => ({
  tweets: state.search.tweets.statuses,
});
