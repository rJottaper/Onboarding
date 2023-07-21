import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import Colors from '../../global/Colors';

// Components
import Button from '../../components/Button';

import HomeController from './HomeController'; 
import HistoryCell from '../../components/HistoryCell';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Home = () => {
  const { gesture, getInitialHeight, rBottomStyle } = HomeController();

  useEffect(() => {
    getInitialHeight();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewBalance}>
        <Text style={styles.balanceText}>TOTAL BALANCE</Text>
        <Text style={styles.amountText}>$ 1.000.000</Text>
        <View style={styles.viewButtons}>
          <Button buttonTitle='ADD MONEY' buttonWithoutBackground />
          <Button buttonTitle='REMOVE MONEY' buttonWithoutBackground />
        </View>
      </View>
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.viewBottomContainer, rBottomStyle]}>
            <View style={styles.viewBottomLine} />
            <HistoryCell />
            <HistoryCell isAmountOut />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
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
    marginTop: 35
  },
  viewBottomContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT / 2,
    borderRadius: 25,
  },
  viewBottomLine: {
    alignSelf: 'center',
    width: 75,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.background,
    marginVertical: 15
  }
});

export default Home;