// @flow
// NPM dependencies
import React from 'react';
import { View, Text } from 'react-native';

// Component dependencies
import style from './style';

type Props = {
  ranking: Object,
};

const RankHistoryListItem = ({ ranking }: Props) => (
  <View style={style.root}>
    <Text style={style.rank}>{ranking.rank}</Text>
    <Text style={style.title}>{ranking.display_name}</Text>
  </View>
);

export default RankHistoryListItem;
