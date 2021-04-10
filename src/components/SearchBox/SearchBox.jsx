import { useState } from 'react';
import { StyledSearchBox } from './SearchBoxStyles';

const debounceTimeout = 1000; // milliseconds
let debounceTimer;

export const SearchBox = () => {
  const [searchTerms, setSearchTerms] = useState('');

  const handleChange = (e) => {
    clearTimeout(debounceTimer);
    const searchValue = e.target.value;
    setSearchTerms(searchValue);

    debounceTimer = setTimeout(() => {
      // TODO: Perform search
    }, debounceTimeout);
  };

  return (
    <StyledSearchBox
      data-testid="search_box_view"
    >
      <input
        data-testid="input_search_terms"
        value={searchTerms}
        onChange={handleChange}
      />
    </StyledSearchBox>
  );
};
