// @flow
// NPM dependencies
import React from 'react';
import { View } from 'react-native';

// Component dependencies
import style from './style';

type Props = {
  children: React.Node,
};

export default class Page extends React.PureComponent<Props> {
  render () {
    return (
      <View style={style.root}>
        {this.props.children}
      </View>
    );
  }
}
