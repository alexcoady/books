// @flow
// NPM dependencies
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// App dependencies
import { CenteredText, Page } from 'shared/components';
import { getById } from 'shared/books/selectors';
import { RankHistoryList } from 'shared/books/components';

type Props = {
  navigator: Object,
  bookId: string,
};

type StateProps = {
  book: Object,
};

class BookDetail extends React.PureComponent<Props & StateProps> {

  render () {
    const { book } = this.props;
    if (!book) {
      return <CenteredText text="No book found" />;
    }
    return (
      <Page>
        {book.ranks_history.length > 0 && (
          <RankHistoryList ranksHistory={book.ranks_history} />
        )}
        {book.ranks_history.length === 0 && (
          <CenteredText text={`No rank history for ${book.title}`} />
        )}
      </Page>
    );
  }
}

const mapState = createStructuredSelector({
  book: getById,
});

export default connect(mapState)(BookDetail);
