import { useSelector } from 'react-redux';
import { hashTagsSelector } from '../../selectors/searchSelectors';
import { Card } from '../Card/Card';
import { HashTag } from '../HashTag/HashTag';
import { StyledSearchFilters } from './SearchFiltersStyles';

export const SearchFilters = () => {
  const { hashTags } = useSelector(hashTagsSelector);

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
};
