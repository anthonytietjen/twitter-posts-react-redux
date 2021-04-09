import { render, screen } from '@testing-library/react';
import { SearchResultRow } from './SearchResultRow';

test('renders SearchResultRow compoenent', () => {
  render(<SearchResultRow />);
  const row = screen.getByTestId('search_result_row');
  expect(row).toBeInTheDocument();
});
