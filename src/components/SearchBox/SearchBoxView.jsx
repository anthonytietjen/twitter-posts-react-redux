import { StyledSearchBox } from './SearchBoxStyles';

export const SearchBoxView = () => (
  <StyledSearchBox
    data-testid="search_box_view"
  >
    <div
      data-testid="text_tweet_feed"
    >
      Tweet Feed
    </div>
  </StyledSearchBox>
);
