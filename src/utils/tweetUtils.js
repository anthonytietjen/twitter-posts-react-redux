export const getTextFromTweetText = (tweetText) => tweetText.substr(0, tweetText.indexOf('https://t.co/') - 1);

export const getUrlFromTweetText = (tweetText) => tweetText.substr(tweetText.indexOf('https://t.co/'));
