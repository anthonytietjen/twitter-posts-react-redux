import { SearchBox } from '../../components/SearchBox/SearchBox';
import { SearchFilters } from '../../components/SearchFilters/SearchFilters';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { StyledSearchPage } from './SearchPageStyles';

export const SearchPageView = () => (
  <StyledSearchPage
    data-testid="search_page_view"
  >
    Search Page
    <SearchBox />
    <SearchFilters />
    <SearchResults />
  </StyledSearchPage>
);
