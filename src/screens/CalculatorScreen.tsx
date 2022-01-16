import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme/Default';
import CalcButton from '../components/CalcButton';

const CalculatorScreen = () => {
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState('0');

  const clean = () => {
    setResult('0');
    setOperation('0');
  };

  const createOperation = (operationNumber: string) => {
    setOperation(operation + operationNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.operationText}>{operation}</Text>
      <Text style={styles.resultText}>{result}</Text>
      <View style={theme.row}>
        <CalcButton text="C" color="primary" action={clean} />
        <CalcButton text="+/-" color="primary" action={null} />
        <CalcButton text="del" color="primary" action={null} />
        <CalcButton text="÷" color="secondary" action={null} />
      </View>
      <View style={theme.row}>
        <CalcButton text="7" action={createOperation} />
        <CalcButton text="8" action={createOperation} />
        <CalcButton text="9" action={createOperation} />
        <CalcButton text="×" color="secondary" action={null} />
      </View>
      <View style={theme.row}>
        <CalcButton text="4" action={createOperation} />
        <CalcButton text="5" action={createOperation} />
        <CalcButton text="6" action={createOperation} />
        <CalcButton text="−" color="secondary" action={null} />
      </View>
      <View style={theme.row}>
        <CalcButton text="1" action={createOperation} />
        <CalcButton text="2" action={createOperation} />
        <CalcButton text="3" action={createOperation} />
        <CalcButton text="+" color="secondary" action={null} />
      </View>
      <View style={theme.row}>
        <CalcButton text="0" action={createOperation} size="large" />
        <CalcButton text="." action={createOperation} />
        <CalcButton text="=" color="secondary" action={null} />
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
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
