import { getTextFromTweetText, getUrlFromTweetText } from './tweetUtils';

describe("Tweet Utils", () => {
  it("should extract just the text without the url", () => {
    expect(getTextFromTweetText("Hello world https://t.co/1234")).toEqual("Hello world")
  })

  it("should extract just the url without the text", () => {
    expect(getUrlFromTweetText("Hello world https://t.co/1234")).toEqual("https://t.co/1234")
  })
})
