import { render, screen } from '@testing-library/react';
import { SearchBox } from './SearchBox';

test('renders SearchBox compoenent', () => {
  render(<SearchBox />);
  const inputSearchTerms = screen.getByTestId('input_search_terms');
  expect(inputSearchTerms).toBeInTheDocument();
});
