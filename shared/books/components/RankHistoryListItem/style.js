// @flow
// NPM dependencies
import { StyleSheet } from 'react-native';

// App dependencies
import { GREY_LIGHTEST, GREY_DARK } from 'shared/style/color';

export default StyleSheet.create({
  root: {
    backgroundColor: GREY_LIGHTEST,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  rank: {
    fontWeight: '600',
    fontSize: 28,
    width: 40,
  },
  title: {
    fontWeight: '600',
    color: GREY_DARK,
  },
});
