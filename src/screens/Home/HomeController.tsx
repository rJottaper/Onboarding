import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const HomeController = () => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan().onStart(() => {
    context.value = { y: translateY.value };
  }).onUpdate((event) => {
    translateY.value = event.translationY + context.value.y;
    translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT + 420);
  });

  const getInitialHeight = () => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
  };

  const rBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return { gesture, getInitialHeight, rBottomStyle };
};

export default HomeController;