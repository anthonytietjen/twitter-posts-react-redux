import { memo, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { StyledSearchBox } from './SearchBoxStyles';
import { fetchTweets } from '../../api/api';
import { tweetsFetched } from '../../actions/searchActions';
import { tweetsSelector } from '../../selectors/searchSelectors';

const debounceTimeout = 1000; // milliseconds
let debounceTimer;

export const SearchBox = memo(() => {
  const dispatch = useDispatch();
  const { searchTerms: defaultSearchTerms } = useSelector(tweetsSelector);
  const [searchTerms, setSearchTerms] = useState(defaultSearchTerms);

  const { data, isFetching, refetch } = useQuery(
    'fetchTweetsBySearchTerms',
    () => fetchTweets(searchTerms),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  useEffect(() => {
    if (data) {
      const nextResultId = data.search_metadata && data.search_metadata.next_results ? data.search_metadata.next_results.replace('?max_id=', '').split('&')[0] : '';
      dispatch(tweetsFetched(searchTerms, data.statuses, nextResultId));
    }
  }, [data]);

  const handleChange = (e) => {
    clearTimeout(debounceTimer);
    const searchValue = e.target.value;
    setSearchTerms(searchValue);

    debounceTimer = setTimeout(() => {
      refetch();
    }, debounceTimeout);
  };

  const handleKeyUp = (e) => {
    // Pressing Enter will not use debounce
    if (e.keyCode === 13) {
      clearTimeout(debounceTimer);
      refetch();
    }
  };

  return (
    <StyledSearchBox
      data-testid="search_box_view"
    >
      <div className="search-icon-contaner">
        {!isFetching && (
          <FontAwesomeIcon icon={faSearch} />
        )}
        {isFetching && (
          <FontAwesomeIcon icon={faCircleNotch} spin />
        )}
      </div>
      <input
        data-testid="input_search_terms"
        value={searchTerms}
        placeholder="Search by keyword"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </StyledSearchBox>
  );
});
