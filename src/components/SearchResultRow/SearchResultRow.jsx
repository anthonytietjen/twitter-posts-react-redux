import { getTextFromTweetText, getUrlFromTweetText } from '../../utils/tweetUtils';
import { HashTag } from '../HashTag/HashTag';
import { StyledSearchResultRow } from './SearchResultRowStyles';

export const SearchResultRow = ({ tweet }) => {
  const tweetTextWithoutUrl = getTextFromTweetText(tweet.text);
  const tweetUrl = getUrlFromTweetText(tweet.text);

  return (
    <StyledSearchResultRow
      data-testid="search_result_row"
    >
      <div
        className="profile-image"
        style={{
          backgroundColor: `#${tweet.user.profile_background_color}`,
        }}
      >
        <img src={tweet.user.profile_image_url_https} alt="asdf" />
      </div>
      <div className="content-area">
        <div className="screen-name-container">
          <a
            className="screen-name-link"
            href={tweet.user.url}
            target="_blank"
          >
            {'@'}
            {tweet.user.screen_name}
          </a>
        </div>
        <div className="text-container">
          {tweetTextWithoutUrl}
          <a
            className="tweet-link"
            href={tweetUrl}
          >
            {tweetUrl}
          </a>
        </div>
        <div className="hashtags-container">
          <HashTag key="1" text="hi" />
        </div>
      </div>
    </StyledSearchResultRow>
  );
};
