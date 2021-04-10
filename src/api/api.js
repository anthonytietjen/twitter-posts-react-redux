const fakeResponse = require('./fakeResponse.json');

export const fetchTweets = (searchTerms) => {
  console.log({ searchTerms });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fakeResponse);
    }, 500);
  });
};
