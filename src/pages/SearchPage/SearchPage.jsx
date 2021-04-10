import MediaQuery, { useMediaQuery } from 'react-responsive';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { SearchFilters } from '../../components/SearchFilters/SearchFilters';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { StyledSearchPage } from './SearchPageStyles';

export const SearchPage = () => {
  const isDesktopView = useMediaQuery({ minWidth: 769 });

  return (
    <StyledSearchPage
      data-testid="search_page_view"
    >
      <div className={(isDesktopView ? 'desktop' : 'mobile')}>
        <h1 data-id="text_tweet_feed">
          Tweet Feed
        </h1>

        <MediaQuery minWidth={769}>
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

        <MediaQuery maxWidth={768}>
          <div className="mobile-view">
            <SearchBox />
            <SearchFilters />
            <SearchResults />
          </div>
        </MediaQuery>
      </div>
    </StyledSearchPage>
  );
};
