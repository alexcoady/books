// @flow
// NPM dependencies
import { combineReducers } from 'redux';
import md5 from 'md5';

// App dependencies
import { PENDING, SUCCESS, ERROR } from 'shared/constants';

// Feature dependencies
import { ACTION_FETCH_ALL, ACTION_SET_SEARCH_TERM } from './constants';

const list = (state = [], action) => {
  switch (action.type) {
  case `${ACTION_FETCH_ALL}_${SUCCESS}`:
    return action.payload.results.map(({ title }) => md5(title));
  }
  return state;
};

const dict = (state = {}, action) => {
  switch (action.type) {
  case `${ACTION_FETCH_ALL}_${SUCCESS}`:
    return action.payload.results.reduce((result, book) => ({
      ...result,
      [md5(book.title)]: {
        ...book,
        id: md5(book.title)
      },
    }), {});
  }
  return state;
};

const loading = (state = false, action) => {
  switch (action.type) {
  case `${ACTION_FETCH_ALL}_${SUCCESS}`:
  case `${ACTION_FETCH_ALL}_${ERROR}`:
    return false;
  case `${ACTION_FETCH_ALL}_${PENDING}`:
    return true;
  }
  return state;
};

const searchTerm = (state = '', action) => {
  if (action.type === ACTION_SET_SEARCH_TERM) {
    state = action.payload;
  }
  return state;
};

export default combineReducers({
  dict,
  list,
  loading,
  searchTerm,
});
