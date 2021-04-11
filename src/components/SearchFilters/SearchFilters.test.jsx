import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchFilters } from './SearchFilters';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

test('renders SearchFilters component', () => {
  const queryClient = new QueryClient();
  const store = mockStore({
    search: {
      tweets: [{
        id: 1,
        entities: {
          hashtags: [
            { text: "hashtag1" },
            { text: "hashtag2" }
          ]
        },
        text: 'text1'
      }]
    }
  })

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SearchFilters />
      </QueryClientProvider>
    </Provider>
  );

  const textFilters = screen.getByTestId('text_filter_by_hashtag');
  expect(textFilters).toBeInTheDocument();

  const hashTag1 = screen.getByTestId('text_hashtag1');
  expect(hashTag1).toBeInTheDocument();

  const hashTag2 = screen.getByTestId('text_hashtag2');
  expect(hashTag2).toBeInTheDocument();
});
