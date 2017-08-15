/**
 * configureStore
 *
 * @flow
 */
import { createStore, /* applyMiddleware */ } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';

import nav from './modules/navigation';
import repositories from './modules/repositories/reducer';
import home from './modules/home/reducer';

export const RootReducer = combineReducers({
  nav,
  global: repositories,
  home,
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
