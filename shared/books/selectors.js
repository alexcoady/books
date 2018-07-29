// @flow
import { createSelector } from 'reselect';

const getBooks = ({ books }) => books;
const getIdFromProps = (_, { bookId }) => bookId;
const getList = createSelector(getBooks, ({ list }) => list);
const getDict = createSelector(getBooks, ({ dict }) => dict);
export const getLoading = createSelector(getBooks, ({ loading }) => loading);
export const getSearchTerm = createSelector(getBooks, ({ searchTerm }) => searchTerm);

export const getAll = createSelector(
  getList,
  getDict,
  getSearchTerm,
  (all, dict, match) => all
    .map(hash => dict[hash])
    .filter(({ author }) => author.toUpperCase().includes(match.toUpperCase()))
);

export const getById = createSelector(
  getIdFromProps,
  getDict,
  (id, dict) => dict[id]
);
