import { StyledSearchResults } from './SearchResultsStyles';

export const SearchResultsView = () => (
  <StyledSearchResults
    data-testid="search_results_view"
  >
    <a
      data-testid="link_load_more"
      href="#/"
    >
      Load More
    </a>
  </StyledSearchResults>
);
