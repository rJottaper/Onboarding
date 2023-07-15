import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../global/Colors';

interface ButtonProps {
  buttonTitle: string;
  buttonWithoutBackground?: boolean;
  onPress?: any;
};

const Button = ({ buttonTitle, buttonWithoutBackground, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={buttonWithoutBackground ? styles.buttonWithoutBackground : styles.button} onPress={onPress}>
      <Text style={buttonWithoutBackground ? styles.titleWithoutBackground : styles.title}>{buttonTitle}</Text>
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