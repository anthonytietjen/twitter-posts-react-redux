export const fetchTweets = (searchTerms) => {
  console.log({ searchTerms });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { hi: 'world' },
        { hi: 'world2' },
      ]);
    }, 500);
  });
};
