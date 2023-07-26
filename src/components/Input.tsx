import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../global/Colors';

interface InputProps {
  withoutIcon?: boolean;
  iconName?: string;
  inputName: any;
  input: any;
  setInput: any;
  placeholderText: string;
  errorMessage?: string;
  inputRef?: any;
};

const Input = ({ withoutIcon, iconName, inputName, input, setInput, placeholderText, errorMessage }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputNameText}>{inputName}</Text>
      <View style={styles.inputContainer}>
        { !withoutIcon ? <Icon style={styles.icon} name={`${iconName}`} size={24} color={Colors.white} /> : false }
        <TextInput 
          style={[styles.textInput, { marginHorizontal: withoutIcon ? 15 : 0 }]}
          value={input}
          onChangeText={setInput}
          placeholder={placeholderText}
          placeholderTextColor={Colors.grey}
        />
      </View>
      { errorMessage !== '' ? <Text style={styles.errorMessage}>{errorMessage}</Text> : false }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 20
  },
  inputNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.grey,
    textTransform: 'uppercase',
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'row',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8
  },
  icon: {
    marginHorizontal: 15,
    alignSelf: 'center'
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    color: Colors.white
  },
  errorMessage: {
    fontSize: 16,
    color: Colors.red,
    marginTop: 10
  }
});

export default Input;