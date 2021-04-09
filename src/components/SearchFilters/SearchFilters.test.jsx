import { render, screen } from '@testing-library/react';
import { SearchFilters } from './SearchFilters';

test('renders SearchFilters compoenent', () => {
  render(<SearchFilters />);
  const textFilters = screen.getByTestId('text_filter_by_hashtag');
  expect(textFilters).toBeInTheDocument();
});
