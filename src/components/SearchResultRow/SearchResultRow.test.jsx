import { render, screen } from '@testing-library/react';
import { SearchResultRow } from './SearchResultRow';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

test('renders SearchResultRow compoenent', () => {

  const tweet = {
    id: 1,
    entities: {
      hashtags: [
        { text: "hashtag1" },
        { text: "hashtag2" }
      ]
    },
    user: {
      url: 'https://t.co/1',
      screen_name: 'user1',
      profile_background_color: 'EECCDD',
      profile_image_url_https: 'https://t.co/1/image'
    },
    text: 'text1 https://t.co/1'
  }

  const store = mockStore({
    search: {
      tweets: [tweet]
    }
  })

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
  expect(text.innerHTML).toEqual("text1");

  const tweetLink = screen.getByTestId('tweet_link_1');
  expect(tweetLink).toBeInTheDocument();
  expect(tweetLink.innerHTML).toEqual("https://t.co/1");

  const hashTag1 = screen.getByTestId('text_hashtag1');
  expect(hashTag1).toBeInTheDocument();

  const hashTag2 = screen.getByTestId('text_hashtag2');
  expect(hashTag2).toBeInTheDocument();
});
