import { createStore, combineReducers, compose } from 'redux';
import { searchReducer } from '../reducers/searchReducer';

const initialState = {};

const reducers = combineReducers({
  search: searchReducer,
});

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  reducers,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */
