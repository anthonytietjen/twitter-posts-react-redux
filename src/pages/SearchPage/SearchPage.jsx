import { memo } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { SearchFilters } from '../../components/SearchFilters/SearchFilters';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { maxWidth } from '../../utils/utils';
import { StyledSearchPage } from './SearchPageStyles';

export const SearchPage = memo(() => {
  const isDesktopView = useMediaQuery({ minWidth: maxWidth });

  return (
    <StyledSearchPage
      data-testid="search_page_view"
    >
      <div className={(isDesktopView ? 'desktop' : 'mobile')}>
        <h1 data-id="text_tweet_feed">
          Tweet Feed
        </h1>

        <MediaQuery minWidth={maxWidth}>
          <div className="desktop-view">
            <div className="left-column">
              <SearchBox />
              <SearchResults />
            </div>
            <div className="right-column">
              <SearchFilters />
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={maxWidth - 1}>
          <div className="mobile-view">
            <SearchBox />
            <SearchFilters />
            <SearchResults />
          </div>
        </MediaQuery>
      </div>
    </StyledSearchPage>
  );
});
