import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { tweetsSelector } from '../../selectors/searchSelectors';
import { Card } from '../Card/Card';
import { SearchResultRow } from '../SearchResultRow/SearchResultRow';
import { StyledSearchResults } from './SearchResultsStyles';
import { fetchTweets } from '../../api/api';
import { tweetsFetched } from '../../actions/searchActions';

export const SearchResults = memo(() => {
  const dispatch = useDispatch();
  const { searchTerms, tweets, nextResultId } = useSelector(tweetsSelector);

  const { data, isFetching, refetch } = useQuery(
    'fetchTweetsByLoadMore',
    () => fetchTweets(searchTerms, nextResultId),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  useEffect(() => {
    if (data) {
      const tweetsNew = tweets.concat(data.statuses);
      const nextResultIdNew = data.search_metadata && data.search_metadata.next_results ? data.search_metadata.next_results.replace('?max_id=', '').split('&')[0] : '';
      dispatch(tweetsFetched(searchTerms, tweetsNew, nextResultIdNew));
    }
  }, [data]);

  if (tweets.length === 0) {
    return null;
  }

  const handleLoadMore = (e) => {
    e.preventDefault();
    refetch();
  };

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

        {nextResultId && (
          <div className="results-footer">
            {!isFetching && (
              <a
                data-testid="link_load_more"
                href="#/"
                onClick={handleLoadMore}
              >
                Load More
              </a>
            )}
            {isFetching && (
              <FontAwesomeIcon icon={faCircleNotch} spin />
            )}
          </div>
        )}
      </Card>
    </StyledSearchResults>
  );
});
