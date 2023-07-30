import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, ScrollView } from 'react-native';
import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import Colors from '../../global/Colors';

// Components
import Button from '../../components/Button';

import HomeController from './HomeController'; 
import HistoryCell from '../../components/HistoryCell';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Home = ({ route }: any) => {
  const { amount, setAmount, addMoney, removeMoney, transactionList, gesture, getInitialHeight, rBottomStyle } = HomeController();

  useEffect(() => {
    getInitialHeight();
  }, []);

  useEffect(() => {
    if (route.params) {
      const { amountValue } = route.params;
      setAmount(amount + amountValue);
    };
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.viewBalance}>
        <Text style={styles.balanceText}>TOTAL BALANCE</Text>
        <Text style={styles.amountText}>{Number(amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</Text>
        <View style={styles.viewButtons}>
          <Button buttonTitle='ADD MONEY' buttonWithoutBackground onPress={() => addMoney()} />
          <Button buttonTitle='REMOVE MONEY' buttonWithoutBackground onPress={() => removeMoney()} />
        </View>
      </View>
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.viewBottomContainer, rBottomStyle]}>
            <View style={styles.viewBottomLine} />
            <FlatList 
              data={transactionList}
              keyExtractor={(item: any, index: any) => index}
              renderItem={({ item }) => <HistoryCell amount={item.amount} isAmountOut={item.withdraw} />}
              ListFooterComponent={<View style={{ height: 320 }} />}
            />
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
    flex: 1,
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