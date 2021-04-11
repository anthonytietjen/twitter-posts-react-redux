import { memo } from 'react';
import { useSelector } from 'react-redux';
import { hashTagsSelector, tweetsSelector } from '../../selectors/searchSelectors';
import { Card } from '../Card/Card';
import { HashTag } from '../HashTag/HashTag';
import { StyledSearchFilters } from './SearchFiltersStyles';

export const SearchFilters = memo(() => {
  const { tweets } = useSelector(tweetsSelector);
  const { hashTags } = useSelector(hashTagsSelector);

  if (tweets.length === 0) {
    return null;
  }

  return (
    <StyledSearchFilters
      data-testid="search_filters_view"
    >
      <Card>
        <div
          data-testid="text_filter_by_hashtag"
        >
          <div className="header-text">
            Filter by hashtag
          </div>
          <div className="hashtag-list">
            {hashTags.map(hashTag => (
              <HashTag
                key={hashTag}
                text={hashTag}
              />
            ))}
          </div>
        </div>
      </Card>
    </StyledSearchFilters>
  );
});
