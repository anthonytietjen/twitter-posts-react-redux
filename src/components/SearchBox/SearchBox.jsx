import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledSearchBox } from './SearchBoxStyles';
import { fetchTweets } from '../../api/api';
import { tweetsFetched } from '../../actions/searchActions';

const debounceTimeout = 1000; // milliseconds
let debounceTimer;

export const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState('');

  const { data, isFetching, refetch } = useQuery(
    'fetchTweets',
    () => fetchTweets(searchTerms),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  useEffect(() => {
    if (data) {
      dispatch(tweetsFetched(data));
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

  console.log({ data, isFetching, refetch });

  return (
    <StyledSearchBox
      data-testid="search_box_view"
    >
      <div className="search-icon-contaner">
        {!isFetching && (
          <span>S</span>
        )}
        {isFetching && (
          <span>L</span>
        )}
      </div>
      <input
        data-testid="input_search_terms"
        value={searchTerms}
        onChange={handleChange}
      />
    </StyledSearchBox>
  );
};
