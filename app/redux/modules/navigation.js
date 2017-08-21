/**
 * navigation
 *
 * @flow
 */

import { fromJS } from 'immutable';
import TabNavigator from '../../navigation/MainTabNavigator';

const homeAction = TabNavigator.router.getActionForPathAndParams('Home');
const initialState = fromJS(TabNavigator.router.getStateForAction(homeAction));

export default function reducer(state = initialState, action) {
  const nextState = fromJS(
    TabNavigator.router.getStateForAction(action, state.toJS())
  );

  // Simply return the original `state` if `nextState` is null or undefined.
  /* istanbul ignore next */
  return nextState || state;
}
