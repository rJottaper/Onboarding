import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../global/Colors';

interface ButtonProps {
  buttonTitle: string;
  buttonWithoutBackground?: boolean;
  onPress?: any;
  specificColor?: any;
  specificColorText?: any;
};

const Button = ({ buttonTitle, buttonWithoutBackground, onPress, specificColor, specificColorText }: ButtonProps) => {
  if (specificColor) {
    return (
      <TouchableOpacity style={[styles.button, { backgroundColor: specificColor }]} onPress={onPress}>
        <Text style={[styles.title, { color: specificColorText ? specificColorText : Colors.white }]}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  };

  if (buttonWithoutBackground) {
    return (
      <TouchableOpacity style={styles.buttonWithoutBackground} onPress={onPress}>
        <Text style={styles.titleWithoutBackground}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginHorizontal: 15
  },
  buttonWithoutBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
    marginHorizontal: 15
  },
  title: {
    fontSize: 18,
    color: Colors.background
  },
  titleWithoutBackground: {
    fontSize: 18,
    color: Colors.white
  }
});

export default Button;