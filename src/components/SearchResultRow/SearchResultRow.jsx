import { StyledSearchResultRow } from './SearchResultRowStyles';

export const SearchResultRow = ({ tweet }) => (
  <StyledSearchResultRow
    data-testid="search_result_row"
  >
    {tweet.hi}
  </StyledSearchResultRow>
);
