import { render, screen } from '@testing-library/react';
import { HashTag } from './HashTag';

test('renders HashTag compoenent', () => {
  render(<HashTag />);
  const hashTag = screen.getByTestId('text_hashtag');
  expect(hashTag).toBeInTheDocument();
});
