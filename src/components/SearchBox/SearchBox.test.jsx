import { render, screen } from '@testing-library/react';
import { SearchBox } from './SearchBox';

test('renders SearchBox compoenent', () => {
  render(<SearchBox />);
  const textTweetFeed = screen.getByTestId('text_tweet_feed');
  expect(textTweetFeed).toBeInTheDocument();
});
