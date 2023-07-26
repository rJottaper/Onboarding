import React, { useState } from 'react';

const AddMoneyController = () => {
  const [amount, setAmount] = useState('');
  const [amountMessageError, setAmountMessageError] = useState('');

  return { amount, setAmount, amountMessageError }
};

export default AddMoneyController;