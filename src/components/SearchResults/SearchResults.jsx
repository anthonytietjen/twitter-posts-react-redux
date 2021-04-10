import { useSelector } from 'react-redux';
import { tweetsSelector } from '../../selectors/searchSelectors';
import { Card } from '../Card/Card';
import { SearchResultRow } from '../SearchResultRow/SearchResultRow';
import { StyledSearchResults } from './SearchResultsStyles';

export const SearchResults = () => {
  const { tweets } = useSelector(tweetsSelector);

  if (tweets.length === 0) {
    return null;
  }

  return (
    <StyledSearchResults
      data-testid="search_results_view"
    >
      <Card>
        <div className="results-list">
          {tweets.map((tweet, index) => (
            <SearchResultRow
              key={tweet.id}
              tweet={tweet}
              isAlternateRow={index % 2 === 1}
            />
          ))}
        </div>
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
};
