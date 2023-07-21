import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Colors from '../global/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface HistoryCellProps {
  isAmountOut?: boolean;
};

const HistoryCell = ({ isAmountOut }: HistoryCellProps) => {
  if (isAmountOut) {
    return (
      <View style={styles.cellContainer}>
        <Icon name='arrow-down-left' color={Colors.red} size={40} />
        <View style={styles.textsView}>
          <Text style={[styles.amountText, { color: Colors.red }]}>$1450</Text>
          <View style={styles.viewAmountOut}>
            <Text style={styles.dateText}>Jul 17 - 2023</Text>
            <Text style={styles.textTypeAmountOut}>Food</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.cellContainer}>
      <Icon name='arrow-up-right' color={Colors.green} size={40} />
      <View style={styles.textsView}>
        <Text style={[styles.amountText, { color: Colors.green }]}>$1450</Text>
        <Text style={styles.dateText}>Jul 18 - 2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    marginBottom: 15,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  textsView: {
    marginHorizontal: 15,
    width: '82%'
  },
  amountText: {
    fontSize: 26,
  },
  dateText: {
    fontSize: 22,
    color: Colors.grey,
  },
  viewAmountOut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTypeAmountOut: {
    fontSize: 22,
    color: Colors.grey
  }
});

export default HistoryCell;