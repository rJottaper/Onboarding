import React, { useState } from 'react';

const AddMoneyController = () => {
  const [amount, setAmount] = useState('');
  const [amountMessageError, setAmountMessageError] = useState('');

  const formatNumber = (number: string) => {
    if (!number) return setAmount('');

    const unformattedValue = number.replace(/\./g, '');
    const formattedValue = parseInt(unformattedValue, 10).toLocaleString('pt-BR', { minimumFractionDigits: 0 });

    setAmount(formattedValue);
  };

  const addMoney = () => {
    if (amount === '') return setAmountMessageError('Please, add some value');

    setAmountMessageError('');
  };

  return { amount, formatNumber, amountMessageError, addMoney }
};

export default AddMoneyController;