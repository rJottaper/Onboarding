import React from 'react';
import { View, Animated, useWindowDimensions, StyleSheet } from 'react-native';
import Colors from '../global/Colors';

interface OnboardingPaginatorProps {
  pages: any;
  scrollX?: any;
};

const OnboardingPaginator = ({ pages, scrollX }: OnboardingPaginatorProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.viewDots}>
      { pages?.map((item: any, index: any) => {
        const dotColor = scrollX?.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [Colors.grey, Colors.white, Colors.grey],
          extrapolate: 'clamp'
        });

        const dotWidth = scrollX?.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [14, 22, 14],
          extrapolate: 'clamp'
        });

        return <Animated.View style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]} key={index.toString()} />
      }) }
    </View>
  );
};

const styles = StyleSheet.create({
  viewDots: {
    flexDirection: 'row',
    height: 64
  },
  dot: {
    height: 10,
    borderRadius: 6,
    marginHorizontal: 6
  }
});

export default OnboardingPaginator;