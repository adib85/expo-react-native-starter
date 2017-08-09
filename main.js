/**
 * App
 *
 * @flow
 */

import Expo from 'expo';

import StorybookUI from './storybook'; // eslint-disable-line
import App from './app/App';

Expo.registerRootComponent(App);
// use this for storybook
// Expo.registerRootComponent(StorybookUI);
