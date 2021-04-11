import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchBox } from './SearchBox';
import { store } from '../../store/store';

const queryClient = new QueryClient();

test('renders SearchBox compoenent', () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SearchBox />
      </QueryClientProvider>
    </Provider>
  );

  const inputSearchTerms = screen.getByTestId('input_search_terms');
  expect(inputSearchTerms).toBeInTheDocument();
});
