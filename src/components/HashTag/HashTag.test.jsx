import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashTag } from './HashTag';
import { store } from '../../store/store';

describe('HashTag', () => {
  it('renders the component with the correct text', () => {
    render(
      <Provider store={store}>
        <HashTag text="HelloWorld" />
      </Provider>
    );

    const hashTag = screen.getByTestId('text_HelloWorld');
    expect(hashTag).toBeInTheDocument();
    expect(hashTag.innerHTML).toEqual("#HelloWorld");
  });
})
