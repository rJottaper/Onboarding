import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeController = () => {
  const navigation: any = useNavigation();

  const [amount, setAmount] = useState(0);
  const [transactionList, setTransactionList]: any = useState([]);

  const addMoney = () => {
    navigation.navigate('AddMoney');
  };

  const removeMoney = () => {
    console.log('Click');
  };

  const WIDTH_MAX = SCREEN_WIDTH < 390 ? 300 : 420;

  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan().onStart(() => {
    context.value = { y: translateY.value };
  }).onUpdate((event) => {
    translateY.value = event.translationY + context.value.y;
    translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + WIDTH_MAX);
  });

  const getInitialHeight = () => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
  };

  const rBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return { amount, setAmount, addMoney, removeMoney, transactionList, gesture, getInitialHeight, rBottomStyle };
};

export default HomeController;