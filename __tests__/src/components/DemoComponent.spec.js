/**
 * @format
 */

import 'react-native';
import React from 'react';
import DemoComponent from '../../../src/components/DemoComponent';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<DemoComponent />);
});
