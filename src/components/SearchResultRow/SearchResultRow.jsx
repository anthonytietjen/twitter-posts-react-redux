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
      data-testid={`search_result_row_${tweet.id}`}
      className={(isAlternateRow) ? 'alternate-background' : ''}
    >
      <div
        className="profile-image"
        style={{
          backgroundColor: `#${tweet.user.profile_background_color}`,
        }}
      >
        <img
          data-testid={`profile_image_${tweet.id}`}
          src={tweet.user.profile_image_url_https}
          alt="Profile Avatar"
        />
      </div>
      <div className="content-area">
        <div className="screen-name-container">
          <a
            data-testid={`screen_name_${tweet.id}`}
            className="screen-name-link"
            href={tweet.user.url}
            target="_blank"
          >
            {'@'}
            {tweet.user.screen_name}
          </a>
        </div>
        <div className="text-container">
          <span
            data-testid={`text_${tweet.id}`}
            className="text"
          >
            {tweetTextWithoutUrl}
          </span>
          {tweetUrl && (
            <a
              data-testid={`tweet_link_${tweet.id}`}
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
