import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ButtonProps {
  text: string;
  color?: 'default' | 'primary' | 'secondary';
  size?: 'default' | 'large';
}

const CalcButton = ({
  text,
  color = 'default',
  size = 'default',
}: ButtonProps) => {
  return (
    <View
      style={[
        styles.button,
        color !== 'default'
          ? color === 'primary'
            ? styles.buttonColorPrimary
            : styles.buttonColorSecondary
          : styles.buttonColorDefault,
        size === 'large' ? styles.buttonSizeLarge : null,
      ]}>
      <Text
        style={[
          styles.buttonText,
          color === 'primary'
            ? styles.buttonTextBlack
            : styles.buttonTextDefault,
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonColorDefault: {
    backgroundColor: '#2D2D2D',
  },
  buttonColorPrimary: {
    backgroundColor: '#9B9B9B',
  },
  buttonColorSecondary: {
    backgroundColor: '#FF9427',
  },
  buttonSizeLarge: {
    width: 180,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400',
  },
  buttonTextDefault: {
    color: '#fff',
  },
  buttonTextBlack: {
    color: '#222',
  },
});
