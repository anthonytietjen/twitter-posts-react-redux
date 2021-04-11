import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchBox } from './SearchBox';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const store = mockStore({
  search: {
    searchTerms: 'hello'
  }
})

test('renders SearchBox component', () => {
  const queryClient = new QueryClient();

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SearchBox />
      </QueryClientProvider>
    </Provider>
  );

  const inputSearchTerms = screen.getByTestId('input_search_terms');
  expect(inputSearchTerms).toBeInTheDocument();
  expect(inputSearchTerms.value).toEqual('hello');
});
