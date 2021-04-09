import { render, screen } from '@testing-library/react';
import { HashTag } from './HashTag';

test('renders HashTag compoenent', () => {
  render(<HashTag text="#HelloWorld" />);
  const hashTag = screen.getByTestId('text_#HelloWorld');
  expect(hashTag).toBeInTheDocument();
  expect(hashTag.innerHTML).toEqual("#HelloWorld");
});
