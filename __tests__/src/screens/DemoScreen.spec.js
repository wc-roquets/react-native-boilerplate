/**
 * @format
 */

import 'react-native';
import React from 'react';
import DemoScreen from '../../../src/screens/DemoScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<DemoScreen />);
});
