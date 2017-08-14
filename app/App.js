/* eslint-disable global-require, react/prop-types, react/sort-comp, no-else-return */

/**
 * App
 *
 * @flow
 */

import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

// import RootNavigation from './navigation/RootNavigation';
import AppWithNavigationState from './navigation/AppWithNavigationState';
import configureStore from './redux/configureStore';

export default class App extends React.Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
