import { HashTag } from '../HashTag/HashTag';
import { StyledSearchResultRow } from './SearchResultRowStyles';

export const SearchResultRow = ({ tweet, isAlternateRow }) => {
  const tweetUrl = tweet.text.indexOf('https://t.co/') > -1
    ? tweet.text.substr(tweet.text.indexOf('https://t.co/'))
    : '';
  const tweetTextWithoutUrl = tweet.text.indexOf('https://t.co/') > -1
    ? tweet.text.substr(0, tweet.text.indexOf(tweetUrl) - 1)
    : tweet.text;

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
          {tweetUrl && (
            <a
              className="tweet-link"
              href={tweetUrl}
              target="_blank"
            >
              {tweetUrl}
            </a>
          )}
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
