// @flow
// NPM dependencies
import React from 'react';
import { ActivityIndicator } from 'react-native';

// Feature dependencies
import CenteredText from './../CenteredText';

type Props = {
  text?: string,
};

const Loading = ({ text }: Props) => (
  <CenteredText text={text || 'Loading'}>
    <ActivityIndicator size="large" />
  </CenteredText>
);

export default Loading;
