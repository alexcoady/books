// @flow
// App dependencies
import { PENDING, SUCCESS } from 'shared/constants';
import data from 'shared/data';

// Feature dependencies
import { ACTION_FETCH_ALL, ACTION_SET_SEARCH_TERM } from './constants';

const fetchAllPending = () => ({
  type: `${ACTION_FETCH_ALL}_${PENDING}`,
});

const fetchAllSuccess = (payload) => ({
  type: `${ACTION_FETCH_ALL}_${SUCCESS}`,
  payload,
});

export const fetchAll = () => (dispatch) => {
  dispatch(fetchAllPending());
  setTimeout(() => {
    dispatch(fetchAllSuccess(data));
  }, 500);
};

export const setSearchTerm = (payload: string) => ({
  type: ACTION_SET_SEARCH_TERM,
  payload,
});
