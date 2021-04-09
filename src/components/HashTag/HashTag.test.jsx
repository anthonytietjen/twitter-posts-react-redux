import { render, screen } from '@testing-library/react';
import { HashTag } from './HashTag';

test('renders HashTag compoenent', () => {
  render(<HashTag text="Hello World" />);
  const hashTag = screen.getByTestId('text_hashtag');
  expect(hashTag).toBeInTheDocument();
  expect(hashTag.innerHTML).toEqual("Hello World");
});
