/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

import { COLORS } from '@styles/colors';

import HomeScreen from '@screens/home';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar barStyle="light-content" />

      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
