import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Colors from './src/global/Colors';

import Onboarding from './src/screens/Onboarding/Onboarding';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  }
});

export default App;