// @flow
// NPM dependencies
import { StyleSheet } from 'react-native';

// App dependencies
import { GREY_LIGHTEST, GREY_DARK, GREY_MID, GREY_LIGHT } from 'shared/style/color';

export default StyleSheet.create({
  root: {
    backgroundColor: GREY_LIGHTEST,
    justifyContent: 'center',
    minHeight: 60,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontWeight: '600',
    color: GREY_DARK,
    marginBottom: 2,
  },
  author: {
    color: GREY_MID,
  },
  description: {
    marginTop: 5,
    color: GREY_LIGHT,
  },
});
