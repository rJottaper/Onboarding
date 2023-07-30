import React, { useState } from 'react';
import { Platform } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

const AddMoneyController = () => {
  const navigation: any = useNavigation();

  const [amount, setAmount]: any = useState(0);
  const [amountToSend, setAmountToSend]: any = useState(0);
  const [amountMessageError, setAmountMessageError] = useState('');

  const maskMoney = (value: any) => {
    const cleanValue = value.replace(/[^\d]/g, '');

    const formatted = Number(cleanValue / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    setAmountToSend(cleanValue);
    setAmount(formatted)
  };

  const addMoney = () => {
    if (amount === 0 || amount === '$0.00') return setAmountMessageError('Please, add some value');

    setAmountMessageError('');
    navigation.navigate('Home', { amountValue: Number(amountToSend) })
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return { amount, maskMoney, amountMessageError, addMoney, keyboardVerticalOffset }
};

export default AddMoneyController;