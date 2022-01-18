import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme/Default';
import CalcButton from '../components/CalcButton';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    createNumber,
    operation,
    result,
    clear,
    handlePositiveNegative,
    handleDelButton,
    handleDivision,
    handleMultiplication,
    handleSubtraction,
    handleAddition,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {operation !== '0' && (
        <Text
          style={styles.operationText}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {operation}
        </Text>
      )}
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <View style={theme.row}>
        <CalcButton text="C" color="primary" action={clear} />
        <CalcButton
          text="+/-"
          color="primary"
          action={handlePositiveNegative}
        />
        <CalcButton text="del" color="primary" action={handleDelButton} />
        <CalcButton text="÷" color="secondary" action={handleDivision} />
      </View>
      <View style={theme.row}>
        <CalcButton text="7" action={createNumber} />
        <CalcButton text="8" action={createNumber} />
        <CalcButton text="9" action={createNumber} />
        <CalcButton text="×" color="secondary" action={handleMultiplication} />
      </View>
      <View style={theme.row}>
        <CalcButton text="4" action={createNumber} />
        <CalcButton text="5" action={createNumber} />
        <CalcButton text="6" action={createNumber} />
        <CalcButton text="−" color="secondary" action={handleSubtraction} />
      </View>
      <View style={theme.row}>
        <CalcButton text="1" action={createNumber} />
        <CalcButton text="2" action={createNumber} />
        <CalcButton text="3" action={createNumber} />
        <CalcButton text="+" color="secondary" action={handleAddition} />
      </View>
      <View style={theme.row}>
        <CalcButton text="0" action={createNumber} size="large" />
        <CalcButton text="." action={createNumber} />
        <CalcButton text="=" color="secondary" action={calculate} />
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
