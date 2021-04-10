export const tweetsSelector = (state) => ({
  tweets: state.search.tweets.statuses,
});

export const hashTagsSelector = (state) => {
  const hashTags = [];

  // Loop all statuses
  state.search.tweets.statuses.forEach(status => {
    // Loop hashtags in statuses
    status.entities.hashtags.forEach(hashTag => {
      // Only add unique entries
      if (hashTags.indexOf(hashTag.text) < 0) {
        hashTags.push(hashTag.text);
      }
    });
  });

  return {
    hashTags,
  };
};
