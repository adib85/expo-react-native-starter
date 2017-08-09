// import { combineReducers } from 'redux';
// import { NavigationActions } from 'react-navigation';

import TabNavigator from './MainTabNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = TabNavigator.router.getActionForPathAndParams('Home');
const tempNavState = TabNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = TabNavigator.router.getStateForAction(
  //  secondAction,
  tempNavState
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    // case 'Login':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.back(),
    //     state
    //   );
    //   break;
    // case 'Logout':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.navigate({ routeName: 'Login' }),
    //     state
    //   );
    //   break;
    default:
      nextState = TabNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
