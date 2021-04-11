export const tweetsSelector = (state) => ({
  tweets: state.search.tweets,
  searchTerms: state.search.searchTerms,
  nextResultId: state.search.nextResultId,
});

export const hashTagsSelector = (state) => {
  const hashTags = [];

  // Loop all statuses
  state.search.tweets.forEach(status => {
    // Loop hashtags in statuses
    status.entities.hashtags.forEach(hashTag => {
      // Only add unique entries
      if (hashTags.includes(hashTag.text)) {
        hashTags.push(hashTag.text);
      }
    });
  });

  return {
    hashTags,
  };
};
