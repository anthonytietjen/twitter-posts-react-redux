import { render, screen } from '@testing-library/react';
import { SearchPage } from './SearchPage';

it('renders SearchPage compoenent', () => {
  render(<SearchPage />);
  const searchBoxView = screen.getByTestId('search_box_view');
  const searchFiltersView = screen.getByTestId('search_filters_view');
  const searchResultsView = screen.getByTestId('search_results_view');
  expect(searchBoxView).toBeInTheDocument();
  expect(searchFiltersView).toBeInTheDocument();
  expect(searchResultsView).toBeInTheDocument();
});
