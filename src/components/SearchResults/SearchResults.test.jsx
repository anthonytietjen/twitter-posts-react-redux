import { render, screen } from '@testing-library/react';
import { SearchResults } from './SearchResults';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('SearchResults without search results', () => {
  const queryClient = new QueryClient();
  const store = mockStore({
    search: {
      searchTerms: 'asdfasdfasdf',
      tweets: [],
      nextResultId: 0
    }
  })

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SearchResults />
      </QueryClientProvider>
    </Provider>
  );

  expect(screen.queryByTestId('search_results_view')).toBeNull();
});

describe('SearchResults with search results', () => {
  let tweet1;
  let tweet2;
  let store;
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();

    tweet1 = {
      id: 1,
      entities: {
        hashtags: [
          { text: "hashtag1" },
          { text: "hashtag2" }
        ]
      },
      user: {
        url: 'https://t.co/1',
        screen_name: 'user1',
        profile_background_color: 'EECCDD',
        profile_image_url_https: 'https://t.co/1/image'
      },
      text: 'text1 https://t.co/1'
    }

    tweet2 = {
      id: 2,
      entities: {
        hashtags: [
          { text: "hashtag3" },
          { text: "hashtag4" }
        ]
      },
      user: {
        url: 'https://t.co/2',
        screen_name: 'user2',
        profile_background_color: 'EECCDD',
        profile_image_url_https: 'https://t.co/2/image'
      },
      text: 'text1 https://t.co/2'
    }

    store = mockStore({
      search: {
        searchTerms: 'hello',
        tweets: [tweet1, tweet2],
        nextResultId: 6
      }
    })
  })

  it('renders result rows and the `Load More` link', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SearchResults />
        </QueryClientProvider>
      </Provider>
    );

    const resultRow1 = screen.getByTestId('search_result_row_1');
    expect(resultRow1).toBeInTheDocument();

    const resultRow2 = screen.getByTestId('search_result_row_2');
    expect(resultRow2).toBeInTheDocument();

    const linkLoadMore = screen.getByTestId('link_load_more');
    expect(linkLoadMore).toBeInTheDocument();
  });
});
