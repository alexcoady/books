// Flow
// NPM dependencies
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// App dependencies
import store from './store';
import { SCREENS } from './constants';
import { navConfig } from './config';
import { Landing, BookDetail } from './screens';

// Register screens
Navigation.registerComponent(SCREENS.LANDING, () => Landing, store, Provider);
Navigation.registerComponent(SCREENS.BOOK_DETAIL, () => BookDetail, store, Provider);

Navigation.startSingleScreenApp(navConfig);
