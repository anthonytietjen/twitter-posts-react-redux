import { render, screen } from '@testing-library/react';
import { SearchResults } from './SearchResults';

test('renders SearchResults compoenent', () => {
  render(<SearchResults />);
  const linkLoadMore = screen.getByTestId('link_load_more');
  expect(linkLoadMore).toBeInTheDocument();
});
