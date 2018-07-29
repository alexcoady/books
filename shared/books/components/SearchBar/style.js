// @flow
// NPM dependencies
import { StyleSheet } from 'react-native';

// App dependencies
import { GREY_LIGHTER, GREY_MID, WHITE } from 'shared/style/color';

export default StyleSheet.create({
  root: {
    backgroundColor: WHITE,
    borderColor: GREY_LIGHTER,
    borderBottomWidth: 1,
  },
  input: {
    height: 60,
    paddingHorizontal: 20,
    color: GREY_MID,
  },
});
