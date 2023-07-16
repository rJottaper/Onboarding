import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Button from '../../components/Button';

import Colors from '../../global/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewBalance}>
        <Text style={styles.balanceText}>TOTAL BALANCE</Text>
        <Text style={styles.amountText}>$ 1.000.000</Text>
      </View>
      <View style={styles.viewButtons}>
        <Button buttonTitle='ADD MONEY' buttonWithoutBackground />
        <Button buttonTitle='REMOVE MONEY' buttonWithoutBackground />
      </View>
      <View style={styles.viewBalanceHistory}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBalance: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 350,
  },
  balanceText: {
    fontSize: 20,
    color: Colors.grey,
    marginBottom: 10
  },
  amountText: {
    fontSize: 50,
    color: Colors.white,
    marginHorizontal: 10
  },
  viewButtons: {
    flexDirection: 'row',
    marginBottom: 50
  },
  viewBalanceHistory: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  }
});

export default Home;