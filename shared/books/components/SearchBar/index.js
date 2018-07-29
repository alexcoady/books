// @flow
// NPM dependencies
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TextInput, View } from 'react-native';

// Feature dependencies
import { setSearchTerm } from './../../actions';
import { getSearchTerm } from './../../selectors';

// Component dependencies
import style from './style';

type Props = {
  term: string,
  setSearchTerm: (string) => void,
};

const SearchBar = ({ term, setSearchTerm }: Props) => (
  <View style={style.root}>
    <TextInput
      autoCorrect={false}
      style={style.input}
      value={term}
      onChangeText={(text) => setSearchTerm(text)}
      placeholder="Search author name"
    />
  </View>
);

const mapState = createStructuredSelector({
  term: getSearchTerm,
});

const mapDispatch = {
  setSearchTerm,
};

export default connect(mapState, mapDispatch)(SearchBar);
