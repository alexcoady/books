// @flow
// NPM dependencies
import React from 'react';
import { Text, View } from 'react-native';

// Component dependencies
import style from './style';

type Props = {
  text: string,
  children?: React.Node,
};

export default class Loading extends React.PureComponent<Props> {
  render () {
    const { children, text } = this.props;
    return (
      <View style={style.root}>
        <Text style={style.text}>{text}</Text>
        {!!children && (
          <View style={style.children}>
            {children}
          </View>
        )}
      </View>
    );
  }
}
