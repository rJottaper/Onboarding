import React from 'react';
import { SafeAreaView, View, Text, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import Colors from '../../global/Colors';

import Input from '../../components/Input';

import AddMoneyController from './AddMoneyController';
import Button from '../../components/Button';

const AddMoney = () => {
  const { amount, setAmount, amountMessageError } = AddMoneyController();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
          <View style={styles.viewTexts}>
            <Text style={styles.title}>Will We Save More Money?</Text>
            <Text style={styles.subtitle}>How much will your wallet be blessed with today?</Text>
          </View>
          <View style={styles.viewInput}>
            <Input 
              iconName='wallet' 
              inputName='AMOUNT' 
              placeholderText='How Much?'
              input={amount}
              setInput={setAmount}
              errorMessage={amountMessageError}
            />
          </View>
          <View style={styles.viewButton}>
            <Button buttonTitle='ADD MONEY' onPress={() => {}} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  viewTexts: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.white,
    marginVertical: 15
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.grey,
  },
  viewInput: {
    marginVertical: 20
  },
  viewButton: {
    height: 60,
    marginVertical: 10
  }
});

export default AddMoney;