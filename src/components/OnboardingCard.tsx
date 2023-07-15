import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import Colors from '../global/Colors';

const imageWidth = Dimensions.get('screen').width;
const imageHeight = Dimensions.get('screen').height / 1.8;

interface OnboardingCardProps {
  image: any;
  title: string;
};

const OnboardingCard = ({ image, title }: OnboardingCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Lorem ipsum sit amet is simply dummy text nothing else</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  title: {
    fontSize: 32,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 15
  }
});

export default OnboardingCard;