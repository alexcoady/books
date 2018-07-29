// @flow
// NPM dependencies
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// App dependencies
import { Loading, Page } from 'shared/components';
import { fetchAll } from 'shared/books/actions';
import { BookList, NoResults, SearchBar } from 'shared/books/components';
import { getAll, getLoading } from 'shared/books/selectors';

class Landing extends React.PureComponent {

  componentWillMount () {
    this.props.fetchBooks();
  }

  render () {
    const { loading, books, navigator } = this.props;
    if (loading) {
      return <Loading text="Loading books" />;
    }
    return (
      <Page>
        <SearchBar editable={!loading} />
        {books.length > 0 ? (
          <BookList
            navigator={navigator}
            books={books}
          />
        ) : (
          <NoResults />
        )}
      </Page>
    );
  }
}

const mapState = createStructuredSelector({
  books: getAll,
  loading: getLoading,
});

const mapDispatch = {
  fetchBooks: fetchAll,
};

export default connect(mapState, mapDispatch)(Landing);
