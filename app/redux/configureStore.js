/**
 * configureStore
 *
 * @flow
 */
import { createStore, combineReducers /* applyMiddleware */ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import nav from '../navigation/navReducer';

const RootReducer = combineReducers({
  nav,
});

export default function configureStore() {
  const store = createStore(
    RootReducer,
    composeWithDevTools()
    //  applyMiddleware(epicMiddleware),
    // other store enhancers if any
  );

  return store;
}
