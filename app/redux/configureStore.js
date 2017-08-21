/**
 * configureStore
 *
 * @flow
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import nav from './modules/navigation';
import repositoriesReducer from './modules/repositories/reducer';
import usernameReducer from './modules/username/reducer';
import getReposEpic from './modules/repositories/epics';

const RootEpic = combineEpics(getReposEpic);
const epicMiddleware = createEpicMiddleware(RootEpic);

export const RootReducer = combineReducers({
  nav,
  global: repositoriesReducer,
  home: usernameReducer,
});

export default function configureStore() {
  const store = createStore(
    RootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
      // other store enhancers if any
    )
  );

  return store;
}
