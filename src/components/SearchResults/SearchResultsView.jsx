import { Card } from '../Card/Card';
import { StyledSearchResults } from './SearchResultsStyles';

export const SearchResultsView = () => (
  <StyledSearchResults
    data-testid="search_results_view"
  >
    <Card>
      <div className="results-footer">
        <a
          data-testid="link_load_more"
          href="#/"
        >
          Load More
        </a>
      </div>
    </Card>
  </StyledSearchResults>
);
