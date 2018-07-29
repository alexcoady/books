// @flow
// NPM dependencies
import React from 'react';
import { FlatList, View } from 'react-native';

// Component dependencies
import RankHistoryListItem from './../RankHistoryListItem';
import style from './style';

type Props = {
  ranksHistory: Object[],
};

export default class RankHistoryList extends React.PureComponent<Props> {

  render () {
    return (
      <FlatList
        style={style.root}
        data={this.props.ranksHistory}
        renderItem={({ item }) => <RankHistoryListItem ranking={item} />}
        keyExtractor={(_, index) => `${index}`}
        ItemSeparatorComponent={() => <View style={style.separator} />}
      />
    );
  }
}
