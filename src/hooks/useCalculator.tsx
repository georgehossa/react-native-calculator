import {useState, useRef} from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}

const useCalculator = () => {
  const [result, setResult] = useState('0');
  const [operation, setOperation] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setResult('0');
    setOperation('0');
  };

  const handleDelButton = () => {
    let negative = '';
    let temNumber = result;
    if (result.includes('-')) {
      negative = '-';
      temNumber = result.substring(1);
    }

    if (temNumber.length > 1) {
      setResult(negative + temNumber.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const createNumber = (textNumber: string) => {
    if (result.includes('.') && textNumber === '.') {
      return;
    }

    if (result.startsWith('0') || result.startsWith('-0')) {
      if (textNumber === '.') {
        setResult(result + textNumber);
      } else if (textNumber === '0' && result.includes('.')) {
        setResult(result + textNumber);
      } else if (textNumber !== '0' && !result.includes('.')) {
        setResult(textNumber);
      } else if (textNumber === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + textNumber);
      }
    } else {
      setResult(result + textNumber);
    }
  };

  const shuffleResultOperation = () => {
    if (result.endsWith('.')) {
      setOperation(result.slice(0, -1));
    } else {
      setOperation(result);
    }
    setResult('0');
  };

  const handlePositiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const handleDivision = () => {
    shuffleResultOperation();
    lastOperation.current = Operators.division;
  };
  const handleMultiplication = () => {
    shuffleResultOperation();
    lastOperation.current = Operators.multiplication;
  };
  const handleSubtraction = () => {
    shuffleResultOperation();
    lastOperation.current = Operators.subtraction;
  };
  const handleAddition = () => {
    shuffleResultOperation();
    lastOperation.current = Operators.addition;
  };

  const calculate = () => {
    const num1 = Number(result);
    const num2 = Number(operation);

    switch (lastOperation.current) {
      case Operators.addition:
        setResult(`${num1 + num2}`);
        break;
      case Operators.subtraction:
        setResult(`${num2 - num1}`);
        break;
      case Operators.multiplication:
        setResult(`${num1 * num2}`);
        break;
      case Operators.division:
        setResult(`${num2 / num1}`);
        break;
    }
  };

  return {
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
  };
};

export default useCalculator;
