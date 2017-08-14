import TabNavigator from './MainTabNavigator';

// Start with two one route
const firstAction = TabNavigator.router.getActionForPathAndParams('Home');
const tempNavState = TabNavigator.router.getStateForAction(firstAction);
const initialNavState = TabNavigator.router.getStateForAction(tempNavState);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    default:
      nextState = TabNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
