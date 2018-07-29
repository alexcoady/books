// @flow
// NPM dependencies
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-native';

// App dependencies
import { CenteredText } from 'shared/components';

// Feature dependencies
import { setSearchTerm } from './../../actions';
import { getSearchTerm } from './../../selectors';

type Props = {
  term: string,
  setSearchTerm: (string) => void,
};

const NoResults = ({ term, setSearchTerm }: Props) => (
  <CenteredText text={`No results found for ${term}`}>
    <Button title="Reset filter" onPress={() => setSearchTerm('')} />
  </CenteredText>
);

const mapState = createStructuredSelector({
  term: getSearchTerm,
});

const mapDispatch = {
  setSearchTerm,
};

export default connect(mapState, mapDispatch)(NoResults);
