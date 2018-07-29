// @flow
// NPM dependencies
import React from 'react';
import { FlatList, View } from 'react-native';

// App dependencies
import { SCREENS } from 'shared/constants';

// Component dependencies
import BookListItem from './../BookListItem';
import style from './style';

type Props = {
  books: Object[],
  navigator: Object,
};

export default class BookList extends React.PureComponent<Props> {

  handleItemPress = ({ id: bookId, title }) => {
    this.props.navigator.push({
      screen: SCREENS.BOOK_DETAIL,
      title,
      passProps: {
        bookId,
      },
    });
  };

  render () {
    return (
      <FlatList
        style={style.root}
        data={this.props.books}
        renderItem={({ item }) => (
          <BookListItem
            book={item}
            onPress={() => this.handleItemPress(item)}
          />
        )}
        keyExtractor={(_, index) => `${index}`}
        ItemSeparatorComponent={() => <View style={style.separator} />}
      />
    );
  }
}
