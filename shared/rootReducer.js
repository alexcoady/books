// Flow
// NPM dependencies
import { combineReducers } from 'redux';

// App dependencies
import books from 'shared/books/reducer';

export default combineReducers({
  books,
});
