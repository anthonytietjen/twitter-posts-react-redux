import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const searchPageView = screen.getByTestId('search_page_view');
  expect(searchPageView).toBeInTheDocument();
});
