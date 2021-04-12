import { render, screen } from '@testing-library/react';
import { SearchResultRow } from './SearchResultRow';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('SearchResultRow', () => {
  let tweet;
  let store;

  beforeEach(() => {
    tweet = {
      id: 1,
      entities: {
        hashtags: [
          { text: "hashtag1" },
          { text: "hashtag2" }
        ],
        urls: [
          { url: "https://t.co/1" },
          { url: "https://t.co/2" }
        ]
      },
      user: {
        url: 'https://t.co/1',
        screen_name: 'user1',
        profile_background_color: 'EECCDD',
        profile_image_url_https: 'https://t.co/1/image'
      },
      text: 'text1 https://t.co/1 and https://t.co/2'
    }

    store = mockStore({
      search: {
        tweets: [tweet]
      }
    })
  })

  it('renders even rows with a white background color', () => {
    render(
      <Provider store={store}>
        <SearchResultRow tweet={tweet} />
      </Provider>
    );

    const row = screen.getByTestId('search_result_row_1');
    expect(row).toHaveStyle('background-color: #FFFFFF');
  });

  it('renders odd rows with a gray background color', () => {
    render(
      <Provider store={store}>
        <SearchResultRow tweet={tweet} isAlternateRow={true} />
      </Provider>
    );

    const row = screen.getByTestId('search_result_row_1');
    expect(row).toHaveStyle('background-color: #F8F9F9');
  });

  it('renders the avatar, screen name, text, link, and hashtags', () => {
    render(
      <Provider store={store}>
        <SearchResultRow tweet={tweet} />
      </Provider>
    );

    const row = screen.getByTestId('search_result_row_1');
    expect(row).toBeInTheDocument();

    const profileImage = screen.getByTestId('profile_image_1');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage.src).toEqual('https://t.co/1/image');

    const userScreenName = screen.getByTestId('screen_name_1');
    expect(userScreenName).toBeInTheDocument();
    expect(userScreenName.innerHTML).toEqual("@user1");

    const text = screen.getByTestId('text_1');
    expect(text).toBeInTheDocument();
    expect(text.innerHTML).toEqual(`text1 <a target="_blank" href="https://t.co/1">https://t.co/1</a> and <a target="_blank" href="https://t.co/2">https://t.co/2</a>`);

    const hashTag1 = screen.getByTestId('text_hashtag1');
    expect(hashTag1).toBeInTheDocument();

    const hashTag2 = screen.getByTestId('text_hashtag2');
    expect(hashTag2).toBeInTheDocument();
  });

});
