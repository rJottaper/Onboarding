import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from './src/global/Colors';

import Onboarding from './src/screens/Onboarding/Onboarding';
import Routes from './src/routes';


const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  }
});

export default App;