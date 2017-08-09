/* eslint-disable react/prefer-stateless-function, react/prop-types */

import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style]} />;
  }
}
