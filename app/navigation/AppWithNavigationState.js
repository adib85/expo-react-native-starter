/**
 *
 *
 * @flow
 */

// import { Notifications } from 'expo';
import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RootNavigator from './RootNavigation';
// import MainTabNavigator from './MainTabNavigator';
// import RootStackNavigator from './RootNavigation';

const AppWithNavigationState = ({ dispatch, nav }) =>
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />; // eslint-disable

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
