/**
 * Test the HomePage
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreen } from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<HomeScreen loading error={false} repos={[]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
