/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import DemoComponent from '../components/DemoComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View testID="demo-screen">
          <DemoComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
