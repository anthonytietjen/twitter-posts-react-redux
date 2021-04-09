import { StyledSearchFilters } from './SearchFiltersStyles';

export const SearchFiltersView = () => (
  <StyledSearchFilters
    data-testid="search_filters_view"
  >
    <div
      data-testid="text_filter_by_hashtag"
    >
      Filter by hashtag
    </div>
  </StyledSearchFilters>
);
