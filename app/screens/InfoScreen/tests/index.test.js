/**
 * Test the HomePage
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import InfoScreen from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<InfoScreen />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
