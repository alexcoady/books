// Flow
// NPM dependencies
import { compose, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

// App dependencies
import rootReducer from './rootReducer';

const customCompose = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const enhancers = customCompose(
  applyMiddleware(thunkMiddleware)
);

export default createStore(rootReducer, undefined, enhancers);
