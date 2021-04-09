import { useState } from 'react';
import { StyledSearchBox } from './SearchBoxStyles';

export const SearchBox = () => {
  const [searchTerms, setSearchTerms] = useState('');

  const handleChange = (e) => {
    setSearchTerms(e.target.value);
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
