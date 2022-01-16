import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme/Default';
import CalcButton from '../components/CalcButton';

const CalculatorScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.operationText}>1,500.00</Text>
      <Text style={styles.resultText}>1,500.00</Text>
      <View style={theme.row}>
        <CalcButton text="C" color="primary" />
        <CalcButton text="+/-" color="primary" />
        <CalcButton text="del" color="primary" />
        <CalcButton text="÷" color="secondary" />
      </View>
      <View style={theme.row}>
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton text="×" color="secondary" />
      </View>
      <View style={theme.row}>
        <CalcButton text="4" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton text="−" color="secondary" />
      </View>
      <View style={theme.row}>
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton text="+" color="secondary" />
      </View>
      <View style={theme.row}>
        <CalcButton text="0" size="large" />
        <CalcButton text="." />
        <CalcButton text="=" color="secondary" />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  resultText: {
    fontSize: 60,
    color: '#fff',
    textAlign: 'right',
    paddingBottom: 20,
  },
  operationText: {
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'right',
  },
});
