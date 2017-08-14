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
import MainTabNavigator from './MainTabNavigator';

const AppWithNavigationState = ({ dispatch, nav }) =>
  <MainTabNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />; // eslint-disable

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
