import { getTextFromTweetText, getUrlFromTweetText } from '../../utils/tweetUtils';
import { HashTag } from '../HashTag/HashTag';
import { StyledSearchResultRow } from './SearchResultRowStyles';

export const SearchResultRow = ({ tweet, isAlternateRow }) => {
  const tweetTextWithoutUrl = getTextFromTweetText(tweet.text);
  const tweetUrl = getUrlFromTweetText(tweet.text);

  return (
    <StyledSearchResultRow
      data-testid="search_result_row"
      className={(isAlternateRow) ? 'alternate-background' : ''}
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
          <span className="text">
            {tweetTextWithoutUrl}
          </span>
          <a
            className="tweet-link"
            href={tweetUrl}
          >
            {tweetUrl}
          </a>
        </div>
        {tweet.entities.hashtags.length > 0 && (
          <div className="hashtags-container">
            {tweet.entities.hashtags.map(hashTag => (
              <HashTag key={hashTag.text} text={hashTag.text} />
            ))}
          </div>
        )}
      </div>
    </StyledSearchResultRow>
  );
};
