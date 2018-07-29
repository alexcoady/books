// @flow
// NPM dependencies
import { StyleSheet } from 'react-native';

// App dependencies
import { GREY_MID } from 'shared/style/color';

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: GREY_MID,
    textAlign: 'center',
    lineHeight: 22,
  },
  children: {
    marginTop: 20,
  }
});
