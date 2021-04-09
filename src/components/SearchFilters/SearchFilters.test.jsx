import { render, screen } from '@testing-library/react';
import { SearchFilters } from './SearchFilters';

test('renders SearchFilters component', () => {
  render(
    <SearchFilters
      hashTags={["#hello", "#world"]}
    />
  );

  const textFilters = screen.getByTestId('text_filter_by_hashtag');
  expect(textFilters).toBeInTheDocument();

  const hashTagHello = screen.getByTestId('text_#hello');
  expect(hashTagHello).toBeInTheDocument();

  const hashTagWorld = screen.getByTestId('text_#world');
  expect(hashTagWorld).toBeInTheDocument();
});
