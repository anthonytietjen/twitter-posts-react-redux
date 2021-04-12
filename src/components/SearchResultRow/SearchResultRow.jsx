import { memo } from 'react';
import { HashTag } from '../HashTag/HashTag';
import { ProcessedText } from '../ProcessedText/ProcessedText';
import { StyledSearchResultRow } from './SearchResultRowStyles';

export const SearchResultRow = memo(({ tweet, isAlternateRow }) => {
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
            <ProcessedText text={tweet.text} />
          </span>
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
});
