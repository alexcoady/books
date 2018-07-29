// @flow
// NPM dependencies
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Component dependencies
import style from './style';

type Book = {
  title: string,
  author: string,
};

type Props = {
  book: Book,
  onPress: () => any,
};

const limitLength = (text: string, maxLength: number): string => {
  return text.length <= maxLength
    ? text
    : `${text.substr(0, maxLength - 3)}...`;
};

const BookListItem = ({ book, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={style.root}>
      <Text style={style.title}>{limitLength(book.title, 40)}</Text>
      <Text style={style.author}>{book.author}</Text>
      {!!book.description && (
        <Text style={style.description}>{book.description}</Text>
      )}
    </View>
  </TouchableOpacity>
);

export default BookListItem;
